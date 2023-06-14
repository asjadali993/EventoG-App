import './App.css';
import About from './components/About';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Gallery from './components/Gallery';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Price from './components/Price';
import Service from './components/Service';
import Review from './components/Review';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { useState } from 'react';
import { useEffect } from "react";
import { MoonLoader } from 'react-spinners';


function App() {
  const override = {
   
    margin: "210px auto",
    
  };

let [loading, setLoading] = useState(false);
useEffect(()=>{
setLoading(true)
setTimeout(() => {
setLoading(false)
}, 1500);


},[])
  const [isDarkMode, setIsDarkMode] = useState(false);
 


  let toggle=() => {
    setIsDarkMode(!isDarkMode)
  }
  


  return (
    <>{
      loading ?
       <MoonLoader speedMultiplier={1.5} cssOverride={override} color={"rgb(20, 100, 220)"} loading={loading} size={50}
      
    /> :
    <Router>
      
      <>
        <Navbar toggle={toggle} isDarkMode={isDarkMode}/>
        
        <Routes>
          <Route path="/" element={<Home toggle={toggle} isDarkMode={isDarkMode} />} />
          
          <Route path="/Services" element={<Service toggle={toggle} isDarkMode={isDarkMode}  />} />
          <Route path="/About" element={<About toggle={toggle} isDarkMode={isDarkMode} />} />
          <Route path="/Gallery" element={<Gallery toggle={toggle} isDarkMode={isDarkMode}/>} />
          <Route path="/Price" element={<Price toggle={toggle} isDarkMode={isDarkMode}/>} />
          <Route path="/Review" element={<Review toggle={toggle} isDarkMode={isDarkMode}/>} />
          <Route path="/ContactUs" element={<ContactUs toggle={toggle} isDarkMode={isDarkMode}/>} />
        </Routes>

        <Footer toggle={toggle} isDarkMode={isDarkMode}/>
      </>
    </Router>
}</>
  );
}

export default App;
