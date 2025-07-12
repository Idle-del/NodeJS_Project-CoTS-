import jwt from "jsonwebtoken";

const token = async (req, res, next) => {
    const auth = req.headers.authorization || req.headers.Authorization;

    if (!auth || !auth.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided!" });
    }

    const token = auth.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, result) => {
        if (err) {
            return res.status(403).json({ message: "Token verification failed!" });
        }
        // console.log(result)
        req.user = result.user;
        next();
    });
};

export default token;
