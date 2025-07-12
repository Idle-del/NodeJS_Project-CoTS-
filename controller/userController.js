import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import sendMail from "../utils/mailSender.js";
import { registerMail } from "../static/registerMail.js";

const userRegister = async (req, res) => {
  const { username, email, password, role } = req.body;
  if (!username || !email || !password || !role) {
    res.status(400).json({
      message: "All fields are mandatory",
    });
  }
  if (!["customer", "admin"].includes(role)) {
    return res
      .status(400)
      .json({ message: "Invalid role. Must be 'customer' or 'admin'" });
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400).json({
      message: "User already Registered with this email ! ",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    role,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      role: user.role,
    });
  } else {
    res.status(400).json({
      message: "User data not valid !",
    });
  }
  const data = {
        from : "magarkiran436@gmail.com",
        to : email,
        subject : "Thank you for register",
        html : registerMail()
    }
    sendMail(data);
  res.status(200).json({
    message: "User registered Successfully ! ",
  });
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      message: "All fields are mandatory",
    });
  }
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
          role: user.role,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    res.status(200).json({
      accessToken,
    });
  } else {
    res.status(400).json({
      message: "Invalid Login data !",
    });
  }
  res.status(200).json({
    message: "User logged in Successfully ! ",
  });
};

export { userRegister, userLogin };
