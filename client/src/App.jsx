import { createContext, useState } from 'react'

import Global from './components/store/Global';

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Home from './components/Home';


function App() {

 

  return (

    <>
<Global>
<div className='relative'>

<SignedOut>
   
   <SignInButton />
 </SignedOut>
 <SignedIn>
 
   <Home/>

  
 </SignedIn>

</div>

    
      

</Global>




    </>
  )
}

export default App
