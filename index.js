import express from "express";
import connectDB from "./config/dbConfig.js";
import dotenv from "dotenv";
dotenv.config();

connectDB();
const app = express();
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
})