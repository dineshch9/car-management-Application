import React, { useContext, useEffect } from 'react'
import Input from './Input'
import { UserButton } from '@clerk/clerk-react'
import Card from './Card'
import Button from './Button'


import space from './store/context'

import Model from './Model'





const Home = () => {

  


  const {display,cars}=useContext(space);


  





  return (
    <>
    <div className='flex sticky top-0  justify-between h-30 z-40  bg-slate-400  '>
      <Input />

      <div className='flex gap-2'>
      <Button/>

     <Model/>
      <UserButton  />
      </div>
   
    
    </div>

    <div className='flex justify-around flex-wrap w-screen h-screen  gap-10'>

   { cars.map((car,i) => (<Card key={i} title={car.title} des={car.des} tag={car.tag} img={car.img}/>))}


   
    </div>
  
   
    </>
  )
}

export default Home