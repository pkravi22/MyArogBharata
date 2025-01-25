import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { useState } from 'react'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css'

import Subcategory from "./components/subcategory/Subcategory";
import Hero from "./components/heroHomepage/Hero";
import Services from "./components/whatWeOffer/Services";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Nvaigation";
import Category from './data/courses';
import SignupPopup from "./components/signUp/SignUpPopup";
import LandingPage from "./pages/landingPage/LandingPage";
import LandingPage1 from "./pages/landingPage/LandingPage";
import Landingpage2 from "./pages/landingPage/Landingpage2";
import Landingpage3 from "./pages/landingPage/Landingpage3";
import Landingpage4 from "./pages/landingPage/Landingpage4";
import AboutUs from "./components/about/About";
import Home1 from "./pages/home/Home1";
const App1 = () => {
  
  return (
    <>
    <SignupPopup
        title="Welcome to Our Platform"
        description="Sign up to explore exclusive features and benefits!"
        delay={1000} // 5 seconds
      />
      <BrowserRouter>
        <Header />
        <Routes>
        <Route
          path="/"
          element={
            <Home1 Category={Category}/>
          }
        />
          {Category.map((category, index) => (
          category.programs.map((program, idx) => (
            <Route
              key={`${category.title}-${program.title}`}
              path={`/services/:categoryId/:programId`}
              element={<Subcategory category={Category} program={program} />}
            />
          ))
        ))}
        <Route path="/about" element={<About/>}/>
      
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/landingpage1" element={<LandingPage1/>}/>
        <Route path="/landingpage2" element={<Landingpage2/>}/>
        <Route path="/landingpage3" element={<Landingpage3/>}/>
        <Route path="/landingpage4" element={<Landingpage4/>}/>
        <Route path="/landingpage" element={<LandingPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App1;
