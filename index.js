import express from "express";
import connectDB from "./config/dbConfig.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import carRoutes from "./routes/carRoutes.js";
import carBookingRoutes from "./routes/carBookingRoutes.js";
import cors from "cors";
dotenv.config();

connectDB();
const app = express();

app.use(cors({
  origin: '*'
}));

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/carBookings', carBookingRoutes);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
})