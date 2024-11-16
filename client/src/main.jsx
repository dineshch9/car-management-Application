import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { dark } from '@clerk/themes'

import App from './App.jsx'

import { ClerkProvider,SignInButton,SignUpButton } from '@clerk/clerk-react'



const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ClerkProvider  publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <App />
 
    </ClerkProvider>
    
  
  </StrictMode>,
)
