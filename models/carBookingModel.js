import mongoose from "mongoose";

const carBookingSchema = mongoose.Schema({
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    carId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car"
    },
    startDate: Date,
    endDate: Date,
    totalCost: Number,
    status: {
        type: String,
        enum: ['pending', 'confirmed'],
        default: 'pending'
    }
});

const CarBooking = mongoose.model("CarBooking", carBookingSchema);
export default CarBooking;