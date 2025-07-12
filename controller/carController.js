import Car from "../models/carModel.js"

const getAllCars = async (req, res) => {
    const cars = await Car.find();
    res.status(200).json(cars);
};

const addCar = async (req, res) => {
    const {name, model, brand, rentPerDay, isAvailable, location} = req.body;
    if(!name || !model || !brand || !rentPerDay || isAvailable == undefined || !location){
        res.status(400).json({
            message: "All fields are Mandatory ! "
        });
    }
    const car = await Car.create({
        name, model, brand, rentPerDay, isAvailable, location
    });
    res.status(201).json(car);
};

export {getAllCars, addCar};