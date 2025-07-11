import mongoose from "mongoose";

const connectDB = () => {
    try{
        const connect = mongoose.connect(process.env.DB_URL)
        console.log("Database connected ! ");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};
export default connectDB;