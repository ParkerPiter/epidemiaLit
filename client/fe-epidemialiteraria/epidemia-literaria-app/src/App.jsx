import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

//Page import
import Home from './Pages/Home/Home';

//Componets import
import Navbar from './components/Navbar/Nav';

function App() {
  
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route />
        <Route />
        <Route />
      </Routes>
    </>
  )
}

export default App
