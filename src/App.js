import React from 'react';
//import logo from './logo.svg';
import './App.css';
import MyNavBar from "./Components/MyNavBar/MyNavBar";
import MainDiv from "./Components/MainDiv/MainDiv.jsx"
export default function App() {
  return (
    <>
    <MyNavBar />
    <h1>Acá van más cosas</h1>
    <div>
    <MainDiv id="MainDiv" />
    </div>
    </>
    )
}

