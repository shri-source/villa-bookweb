import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import About from './Pages/About';
import BestOffers from './Pages/BestOffers';
import Contact from "./Pages/Contact";
import Favorites from "./Pages/Favorites";
import FindStay from "./Pages/FindStay";
import Home from './Pages/Home';
import Login from "./Pages/Login";
import Register from "./Pages/Register";


function App() {
  return (
    <div className="App">
<BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<><Home/><BestOffers /></>} />
      <Route path='/about' element={<About />} />
      <Route path='/findstay' element={<FindStay/>} />
      <Route path='/favorite' element={<Favorites/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path="/book" element={<Register />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
