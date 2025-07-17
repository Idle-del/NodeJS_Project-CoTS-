import express from "express";
import connectDB from "./config/dbConfig.js";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import carRoutes from "./routes/carRoutes.js";
import carBookingRoutes from "./routes/carBookingRoutes.js";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

connectDB();
const app = express();

app.use(cors({
  origin: '*'
}));

app.use(express.json());

// Get directory name correctly for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// FIXED: Serve static files from the correct storage directory
app.use('/storage', express.static(path.join(__dirname, 'storage')));

app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/carBookings', carBookingRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});