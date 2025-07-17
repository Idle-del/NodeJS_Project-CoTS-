import Car from "../models/carModel.js";

// Get all cars
const getAllCars = async (req, res) => {
  const cars = await Car.find();
  res.status(200).json(cars);
};

// Add a new car
const addCar = async (req, res) => {
  const { name, model, brand, rentPerDay, location, status } = req.body;

  if (
    !name ||
    !model ||
    !brand ||
    !rentPerDay ||
    !status ||
    !location ||
    !req.file
  ) {
    return res.status(400).json({ message: "All fields are mandatory!" });
  }

  const image = req.file.filename;

  const car = await Car.create({
    name,
    model,
    brand,
    rentPerDay,
    status,
    location,
    user_id: req.user.id,
    image,
  });

  res.status(201).json(car);
};

// Get single car
const getCar = async (req, res) => {
  const car = await Car.findById(req.params.id);
  if (!car) {
    return res.status(404).json({ message: "Car not found!" });
  }
  res.status(200).json(car);
};

// Update car
const updateCar = async (req, res) => {
  const car = await Car.findById(req.params.id);
  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }

  if (car.user_id.toString() !== req.user.id) {
    return res
      .status(403)
      .json({ message: "Don't have permission to update the car!" });
  }

  const { name, model, brand, rentPerDay, location, status } = req.body;

  let image = car.image;
  if (req.file) {
    image = req.file.filename;
  }

  const updatedFields = {
    name: name || car.name,
    model: model || car.model,
    brand: brand || car.brand,
    rentPerDay: rentPerDay || car.rentPerDay,
    location: location || car.location,
    status: status || car.status,
    image,
  };

  const updatedCar = await Car.findByIdAndUpdate(req.params.id, updatedFields, {
    new: true,
  });
  res.status(200).json(updatedCar);
};

// Delete car
const deleteCar = async (req, res) => {
  const car = await Car.findById(req.params.id);
  if (!car) {
    return res.status(404).json({ message: "Car not found!" });
  }

  if (car.user_id.toString() !== req.user.id) {
    return res
      .status(403)
      .json({ message: "Don't have permission to delete the car!" });
  }

  await car.deleteOne();
  res.status(200).json({ message: "Car deleted successfully", car });
};

export { getAllCars, addCar, getCar, updateCar, deleteCar };
