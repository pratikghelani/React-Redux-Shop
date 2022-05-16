import React from 'react'
import Nevbar from './component/Nevbar';
import Home from './component/Home';
import Cart from './component/Cart';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
     
      <Nevbar/> 
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="cart" element={ <Cart /> } />
      </Routes>
    
    </>
  );
}

export default App;
