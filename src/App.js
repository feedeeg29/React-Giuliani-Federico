import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MyNavBar from "./Components/MyNavBar/MyNavBar";
import MainDiv from "./Components/MainDiv/MainDiv.jsx"
import ProductListContainer from './Components/Products/ProductListContainer';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
export default function App() {
  return (
    <>
    <BrowserRouter >
    <MyNavBar />
    <Routes>
      <Route exact path="/MainDiv" element={<MainDiv />} />
      <Route exact path="/products" element={<ProductListContainer />} />
    </Routes>
    </BrowserRouter>
    </>
    /*<div>
    <MainDiv id="MainDiv" />
    </div>
    <ProductListContainer />*/
    
    )
}

