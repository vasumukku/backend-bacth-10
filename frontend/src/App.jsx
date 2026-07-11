import React from 'react'
import Body from "./components/Body"
import Login from './components/Login'
import Signin from './components/Signin'
import CreateNotes from "./components/CreateNotes"
import Cart from "./components/Cart"

import { BrowserRouter, Routes,Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path="/signin" element={<Signin />}  /> 
              <Route path='/body' element={<Body />} /> 
              <Route path="/create" element={<CreateNotes />}  />
              <Route path="/cart" element={<Cart />}  />
          </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
