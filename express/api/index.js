import express from 'express';

import { clerkMiddleware } from '@clerk/express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import users1 from './models/users.js'; 
import dotenv from 'dotenv';
dotenv.config(); 
const app = express();


const corsOptions = {
  origin: 'https://car-management-application-vert.vercel.app', 
  methods: ['GET', 'POST', 'DELETE'],  
  allowedHeaders: ['Content-Type', 'Authorization'] 
};

app.use(cors(corsOptions));






app.use(clerkMiddleware())
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));  // Set limit to 50mb (adjust as needed)
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json())

const url1 =  process.env.DB_URL;
console.log("hiijust"+url1+"mmm");
console.log("bye");
const url =  "mongodb+srv://dinesh:dinesh@dinesh.2k4lr.mongodb.net/cars1?retryWrites=true&w=majority&appName=Dinesh";

async function connect(url){
  try {
    await mongoose.connect(url);
    console.log("connected");
  } catch (error) {
    console.log("not connected");
    
  }
  
} 

connect(url);


const addCarToUser = async (id,name,email, newCar,res) => {

  

  try {
    // Check if the user exists by their unique id
    let userf = await users1.findOne({ id: id });

    if (userf) {
     
      // User exists, add the new car to their cars array
      userf.cars.push(newCar);
      await userf.save();
     

      console.log('New car added to existing user successfully');
    } else {
      // User does not exist, create a new user and add the car
    userf = new users1({
        id: userId,
        name: name,  // You can customize the name or make it dynamic
        email: email,  // You can customize the email or make it dynamic
        cars: [newCar],  // Create the user with their first car
      });
      await userf.save();
     

      console.log('New user created with a car');
    }
  } catch (err) {
    console.error('Error adding car to user:', err);
  }
};

app.post('/add_car', async (req, res) => {
  const userId = req.auth.userId
console.log("hiiii"+userId);
  if (!userId) {
    return void res.status(400).json({ error: 'Error: No signed-in user' })
  }
  
	const {id,name,email, a, b, c, d } = req.body; 
  console.log(id);
  const newCar ={ 'title':a,  "des":b,"tag":c,"img":d};

  
addCarToUser(id,name,email, newCar,res);
res.status(200).send("Success");


    
   
});



app.get('/get_cars', async (req, res) => {
  console.log("hiijust"+url1+"mmm");
  console.log("bye");
  const userId = req.auth.userId

  if (!userId) {
    return void res.status(400).json({ error: 'Error: No signed-in user' })
  }



console.log(userId);
  try {
    const user = await users1.findOne({ id: userId });

    if (!user) {
      return res.send({ cars: [] });
    }

    // If the user exists, return the cars, including their _id

    res.send({ cars: user.cars });
  } catch (err) {
    console.error('Error retrieving cars:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.delete('/delete_car', async (req, res) => {

  const userId = req.auth.userId

  if (!userId) {
    return void res.status(400).json({ error: 'Error: No signed-in user' })
  }

  const {  carId } = req.body;  // Expecting the userId and carId in the request body

  try {
    // Find the user by userId
    const user = await users1.findOne({ id: userId });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Find the car in the user's cars array by carId
    const carIndex = user.cars.findIndex(car => car._id.toString() === carId);

    if (carIndex === -1) {
      return res.status(404).json({ message: 'Car not found for this user' });
    }

    // Remove the car from the user's cars array
    user.cars.splice(carIndex, 1);

    // Save the updated user document
    await user.save();

    res.status(200).json({ message: 'Car deleted successfully' });
  } catch (err) {
    console.error('Error deleting car:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});




// app.post('/add_user', async (req, res) => {
//   const { id, name, email } = req.body;  // Expecting the userId, name, and email in the request body

//   try {
//     // Check if the user already exists by their userId
//     const existingUser = await users1.findOne({ id: id });

//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // If user doesn't exist, create a new user
//     const newUser = new users1({
//       id: id,
//       name: name,
//       email: email,
//       cars: []  // Initially, the cars array will be empty
//     });

//     // Save the new user to the database
//     await newUser.save();

//     res.status(201).json({ message: 'User added successfully', user: newUser });
//   } catch (err) {
//     console.error('Error adding user:', err);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });




	





	
	





app.listen(8085, () => {
	console.log('Server started on 8085')
})