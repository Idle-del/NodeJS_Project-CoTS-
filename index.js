import express from "express";
import connectDB from "./config/dbConfig.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

connectDB();
const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
})