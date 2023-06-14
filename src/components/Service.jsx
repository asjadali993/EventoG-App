import React from 'react'
import { useState, useEffect } from "react";
import { HashLoader } from 'react-spinners';

export default function Service(props) {
    const override = {
        margin: " auto",
    padding:"200px 0",
    height:"300px"
      };

    let [loading, setLoading] = useState(false);
useEffect(()=>{
    setLoading(true)
setTimeout(() => {
    setLoading(false)
}, 1000);


},[])
  return (
    <>
    
    <section className={props.isDarkMode ? 'dark-mode pb-5' : 'light-mode pb-5'}>
    {
            loading ?
             <HashLoader speedMultiplier={2} cssOverride={override} color={"rgb(20, 100, 220)"} loading={loading} size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> :
<div>
<h1 className="head text-center py-5 mx-5"> our <span >services</span> </h1>

<div className="container d-flex flex-wrap ">

    <div className={props.isDarkMode ? 'box ' : 'boxLight p-4'}>
        <p className='icon m-auto'><i className="fas fa-map-marker-alt pt-3   "></i> </p>
        <h4 className='my-2'>venue selection</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
    </div>

    <div className={props.isDarkMode ? 'box p-4' : 'boxLight p-4 '}>
        <p className='icon m-auto'><i className="fas fa-envelope pt-3 "></i></p>
        <h4 className='my-2'>invitation card</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
    </div>

    <div className={props.isDarkMode ? 'box p-4' : 'boxLight p-4'}>
        <p className='icon m-auto'><i className="fas fa-music pt-3"></i></p>
        <h4 className='my-2'>entertainment</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
    </div>

    <div className={props.isDarkMode ? 'box p-4' : 'boxLight p-4'}>
    <p className='icon m-auto'> <i className="fas fa-utensils pt-3"></i></p>
        <h4 className='my-2'>food and drinks</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
    </div>

    <div className={props.isDarkMode ? 'box p-4' : 'boxLight p-4'}>
    <p className='icon m-auto'> <i class="fas fa-film pt-3"></i></p>
        <h4 className='my-2'>photos and videos</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
    </div>

    <div className={props.isDarkMode ? 'box p-4' : 'boxLight p-4'}>
    <p className='icon m-auto'><i className="fas fa-birthday-cake pt-3"></i></p>
        <h4 className='my-2'>custom food</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, suscipit.</p>
    </div>

</div></div>}

</section>
    </>
  )
}
