import React, { useState } from 'react'

import space from './context'

import { useAuth } from '@clerk/clerk-react'

function fetch(url) {
  const { getToken } = useAuth()

  const authenticatedFetch = async (url) => {
    return fetch(url, {
      headers: { Authorization: `Bearer ${await getToken()}` },
    }).then((res) => res.json())
  }

  return authenticatedFetch
}




const Global = ({children}) => {
 
  const [display,dispfun] =useState(false);

async function handelclick(){
  dispfun(!display);
  const x= await getToken();
  console.log();
  
  
}

const handleSubmit = (event) => {
  event.preventDefault();





 
 
};


  const obj={
    display,handelclick,handleSubmit
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