import { useState } from 'react'
import './App.css'
import MyInput from './components/MyInput.jsx'


function App() {
  return (
    <>
    <div className='bg'>
          <div className="form-container">
            <h1 className='title'>Login</h1>
            <p className="subtitle">Sign in to your account</p>
            <form>
              {/* props */}
              <MyInput 
                label="Email" 
                type="email" 
                placeholder="Enter your email"
              />
              <MyInput 
                label="Password" 
                type="password" 
                placeholder="Enter your password"
              />
              <button type="submit" className='btn'>Submit</button>
            </form>
          </div>
        </div>
    </>
  )
}


export default App