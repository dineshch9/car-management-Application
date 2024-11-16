
import mongoose from 'mongoose';

// Define the schema for a single car
const carSchema = new mongoose.Schema({
  title: { type: String, required: true },
  des: { type: String, required: true },
  tag: { type: String, required: true },
  img: { type: String, required: true },
});

// Define the schema for a user
const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  cars: {
    type: [carSchema],  // Array of cars
    required: true,
  },
});

const user = mongoose.model('User', userSchema,"Users");

export default user;
