import Car from "../models/carModel.js";
import CarBooking from "../models/carBookingModel.js";
import { bookingSuccessful } from "../static/bookingSuccessful.js";
import sendMail from "../utils/mailSender.js";
import dotenv from "dotenv";
dotenv.config();

const createBooking = async (req, res) => {
  const { carId, startDate, endDate } = req.body;
  if (!carId || !startDate || !endDate) {
    return res.status(400).json({
      message: "All fields are mandatory"
    });
  }
  
  const car = await Car.findById(carId);
  if (!car) {
    return res.status(404).json({
      message: "Car not found"
    });
  }
  
  if (car.status === "booked") {
    return res.status(400).json({
      message: "Car is already booked"
    });
  }
  
  const days = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
  const totalCost = car.rentPerDay * Math.ceil(days);

  const booking = await CarBooking.create({
    customerId: req.user.id,
    carId,
    startDate,
    endDate,
    totalCost,
    status: "confirmed"
  });
  
  car.status = "booked";
  await car.save();
  res.status(201).json(booking);

  // Fix image URL
  let carImageUrl;
  if (car.image) {
    if (car.image.startsWith('http')) {
      carImageUrl = car.image;
    } else {
      // Normalize path
      const imagePath = car.image.replace(/^[\\/]/, '');
      carImageUrl = `${process.env.BASE_URL}/storage/${imagePath}`;
    }
  } else {
    carImageUrl = '';
  }

  const data = {
    from: "magarkiran436@gmail.com",
    to: req.user.email,
    subject: "Your Booking is Confirmed",
    html: bookingSuccessful({
      username: req.user.username,
      carName: car.name,
      carBrand: car.brand,
      carModel: car.model,
      rentPerDay: car.rentPerDay,
      location: car.location,
      bookingId: booking._id,
      startDate,
      endDate,
      totalCost,
      carImageUrl
    })
  };
  sendMail(data);
};

const getMyBookings = async (req, res) => {
  const bookings = await CarBooking.find({ customerId: req.user.id });
  res.json(bookings);
};

const getBookingById = async (req, res) => {
  const booking = await CarBooking.findById(req.params.id);
  if (!booking) {
    return res.status(404).json({ 
        message: 'Booking not found' 
    });
  }
  res.json(booking);
};

const deleteBooking = async (req, res) => {
  const booking = await CarBooking.findById(req.params.id);
  if (!booking){ 
    return res.status(404).json({ 
        message: 'Booking not found' 
    });
  }
  if(booking.customerId.toString() !== req.user.id){
        return res.status(403).json({
            message: "Don't have permission to delete the booking !"
        });
    }
    await booking.deleteOne();
  res.json({ message: 'Booking deleted successfully' });
};


export { createBooking, getMyBookings, getBookingById, deleteBooking };