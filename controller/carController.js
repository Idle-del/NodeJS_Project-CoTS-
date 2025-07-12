import Car from "../models/carModel.js"

const getAllCars = async (req, res) => {
    const cars = await Car.find();
    res.status(200).json(cars);
};

const addCar = async (req, res) => {
    const {name, model, brand, rentPerDay, location, status} = req.body;
    if(!name || !model || !brand || !rentPerDay || !status || !location){
        return res.status(400).json({
            message: "All fields are Mandatory ! "
        });
    }
    const car = await Car.create({
        name, model, brand, rentPerDay, status, location, user_id: req.user.id
    });
    res.status(201).json(car);
};

const getCar = async (req, res) =>{
    const car = await Car.findById(req.params.id);
    if(!car){
        return res.status(404).json({
            message: "Car not found ! "
        });
    }
    res.status(200).json(car);
};

const updateCar = async (req, res) => {
  const car = await Car.findById(req.params.id);
  if (!car) {
    return res.status(404).json({
      messsage: "Car not found",
    });
  }

  if(car.user_id.toString() !== req.user.id){
    return res.status(403).json({
      messsage: "Don't have permission to update the car !"
    });
  }

  const updatedCar = await Car.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedCar);
};

const deleteCar = async (req, res) => {
    const car = await Car.findById(req.params.id);
    if(!car){
        return res.status(404).json({
            message: "Car not found !"
        });
    }
    if(car.user_id.toString() !== req.user.id){
        return res.status(403).json({
            message: "Don't have permission to delete the car !"
        });
    }
    await car.deleteOne();
    res.status(200).json(car);
};

export {getAllCars, addCar, getCar, updateCar, deleteCar};