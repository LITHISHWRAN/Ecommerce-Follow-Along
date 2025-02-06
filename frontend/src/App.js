import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { LoginPage,SignupPage,Home } from "./Routes/routes.js"
import "./App.css";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LoginPage/>}/>  
        <Route path='/signup' element={<SignupPage />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
