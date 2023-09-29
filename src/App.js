import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import LoginPage from './LoginPage/LoginPage';
import AboutPage from './AboutPage/AboutPage'

function App() {
  return (  
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer"> 
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      <Footer/>
      
      </div>
    </Router>
  );
}

export default App;
