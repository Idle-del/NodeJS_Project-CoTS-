import mongoose from "mongoose";

const carSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    rentPerDay: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

const Car = mongoose.model("Car", carSchema);
export default Car;