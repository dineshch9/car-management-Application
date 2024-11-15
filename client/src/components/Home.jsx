import React, { useContext, useEffect } from 'react'
import Input from './Input'
import { UserButton } from '@clerk/clerk-react'
import Card from './Card'
import Button from './Button'


import space from './store/context'

import Model from './Model'





const Home = () => {


  const {display}=useContext(space);

  





  return (
    <>
    <div className='flex  justify-between  bg-slate-400  '>
      <Input />

      <div className='flex gap-2'>
      <Button/>

     <Model/>
      <UserButton />
      </div>
   
    
    </div>

    <div className='flex justify-around flex-wrap w-screen h-screen  gap-10'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
  
   
    </>
  )
}

export default Home