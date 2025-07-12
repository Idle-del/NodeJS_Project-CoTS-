import express from "express";
import connectDB from "./config/dbConfig.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import carRoutes from "./routes/carRoutes.js"
dotenv.config();

connectDB();
const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
})