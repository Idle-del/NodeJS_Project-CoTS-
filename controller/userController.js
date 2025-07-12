import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// const userRegister = async (req, res) => {
//     const {username, email, password} = req.body;
//     if(!username || !email || !password){
//         res.status(400).json({
//             message: "All fields are mandatory ! "
//         });
//     }
//     const userAvailable = await User.findOne({ email });
//     if(userAvailable){
//         res.status(400).json({
//             message: "User already Registered with this email ! "
//         });
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({
//         username,
//         email,
//         password: hashedPassword
//     });
//     if(user){
//         res.status(201).json({
//             _id: user.id,
//             email: user.email
//         });
//     }
//     else{
//         res.status(400).json({
//             message: "User data not valid !"
//         });
//     }
//     // res.status(200).json({
//     //     message : "User Registered Successfully!"
//     // });
// };

// const userLogin = async (req, res) => {
//     const {email, password} =req.body;
//     if(!email || !password){
//         res.status(400).json({
//             message: "All fields are mandatory! "
//         });
//     }
//     const user = await User.findOne({ email });
//     if(user && (await bcrypt.compare(password, user.password))){
//         const accessToken = jwt.sign({
//             user: {
//                 username: user.username,
//                 email: user.email,
//                 id: user.id
//             }
//         }, 
//         process.env.ACCESS_TOKEN_SECRET,
//         { expiresIn: "1d"}
//     );
//         res.status(200).json({ accessToken });
//     }
//     else{
//         res.status(401).json({
//             message: "Invalid Login data ! "
//         });
//     }
//     // res.status(200).json({
//     //     message : "User logged in Successfully!"
//     // });
// };

// export {userRegister, userLogin};

const userRegister = async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400).json({
            message: "All fields are mandatory"
        });
    }
    const userAvailable = await User.findOne({ email });
    if(userAvailable){
        res.status(400).json({
            message: "User already Registered with this email ! "
        });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });
    if(user){
        res.status(201).json({
            _id: user.id,
            email: user.email,
        });
    }
    else{
        res.status(400).json({
            message: "User data not valid !"
        });
    }
    res.status(200).json({
        message: "User registered Successfully ! "
    });
};

const userLogin = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400).json({
            message: "All fields are mandatory"
        });
    }
    const user = await User.findOne({ email });
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, 
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1d"}
    );
    res.status(200).json({
        accessToken
    });
    }
    else{
        res.status(400).json({
            message: "Invalid Login data !"
        });
    }
    res.status(200).json({
        message: "User logged in Successfully ! "
    });
};

export {userRegister, userLogin};