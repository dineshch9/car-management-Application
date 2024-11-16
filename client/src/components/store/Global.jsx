import React, { useState,useEffect } from 'react'

import space from './context'
import axios from 'axios';

import { useAuth, useUser } from '@clerk/clerk-react'

// const url="http://localhost:8085"
const url="https://car-management-application-server.vercel.app"





const Global = ({children}) => {
 
  const [display,dispfun] =useState(false);
  const [id,idf] =useState("");
  const [name,namef] =useState("");
  const [email,emailf] =useState("");
  const [cars,carsf] =useState([]);
  const { lastSignInAt,isLoaded, isSignedIn, user } = useUser();
  const { getToken } = useAuth();
  const [count,countf]=useState(1);






useEffect(()=>{

  if( isLoaded && isSignedIn) {
    console.log(isLoaded);
    console.log(isSignedIn);
 
    countf(count+1);
    console.log(count);
    console.log(id+"hiiiiiiiiiiiiii");

    console.log(isLoaded);
     idf(user.id);
 namef(user.fullName);
 emailf(user.emailAddresses[0].emailAddress);


const obj2={id};


async function fecth1(){
  console.log(id);
  console.log("hiii");
  const res= await fetch(url+`/get_cars?id=${id}`, {
   // Use the provided method (POST or GET)
    headers: {
      'Authorization': `Bearer ${await getToken()}`,
      'Content-Type': 'application/json' // Set the content type to JSON
    },
   
  })
  
  const data =await res.json();

  carsf(data.cars);
}





if(count>1){
  fecth1();


}




  }
},[id,isLoaded,isSignedIn])




async function handelclick(){
  dispfun(!display);
 
  console.log();
  
  
}



const handleSubmit = async (a, b, c, d) => {
  const obj = { id, name, email, a, b, c, d };

  console.log("Submitting car details...");

  try {
    const res = await axios.post(url + "/add_car", obj, {
      headers: {
        'Authorization': `Bearer ${await getToken()}`,
        'Content-Type': 'application/json'
      }
    });

    console.log("Axios response received:", res);

    if (res.status === 200) {
      console.log("Car successfully added");
      const arr = [...cars];
      arr.push({
        "title": a,
        "des": b,
        "tag": c,
        "img": d
      });

      // Update cars state
      carsf(arr);
    } else {
      console.error('Failed to add car. Status:', res.status);
    }
  } catch (error) {
    console.error('Error during axios request:', error);
  }

  console.log("End of handleSubmit function");
};




  const obj={
    display,handelclick,handleSubmit,cars,carsf,id
  }
  return (
    <>
    <space.Provider value={obj}>

        {children}
    </space.Provider>
    </>
    
  )
}

export default Global