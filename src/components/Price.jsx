import React from 'react'
import { useState, useEffect } from "react";
import { HashLoader } from 'react-spinners';

export default function Price(props) {
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
        <h1 className="head text-center py-5"> our <span>price</span> </h1>

        <div className="container d-flex flex-wrap justify-content-center  ">
            <div class="card mb-lg-0 mb-3 me-lg-2 border border-2" style={{width:"18rem"}}>
                <h5 class="card-header bg-blue text-white text-center py-3 fs-4">For Birthdays</h5>
                <div class={props.isDarkMode ? 'card-body text-center bg-dark text-white' : 'card-body text-center '}>
                    <h5 class="card-title my-3 fs-1">₹18,000.00</h5>
                    <ul className='list-unstyled  '>
                        <li><i className="fas fa-check my-3 bluecolor "></i> full services</li>
                        <li> <i className="fas fa-check my-3 bluecolor"></i> decorations </li>
                        <li> <i className="fas fa-check my-3 bluecolor"></i> music and photos </li>
                        <li> <i className="fas fa-check my-3 bluecolor"></i> food and drinks </li>
                        <li> <i className="fas fa-check my-3 bluecolor"></i> invitation card </li>
                    </ul>
                    <a href="/" class="btn btn-secondary my-3">Check Out</a>
                </div>
            </div>
            <div class="card mb-lg-0 mb-3 card me-lg-2 border border-2" style={{width:"18rem"}}>
                <h5 class="card-header bg-blue text-white text-center py-3 fs-4">For Weddings</h5>
                <div class={props.isDarkMode ? 'card-body text-center bg-dark text-white' : 'card-body text-center '}>
                    <h5 class="card-title my-3 fs-1">₹33,000.00</h5>
                    <ul className='list-unstyled  '>
                        <li><i className="fas fa-check my-3 bluecolor "></i> full services</li>
                        <li> <i className="fas fa-check my-3 bluecolor"></i> decorations </li>
                        <li> <i className="fas fa-check my-3 bluecolor"></i> music and photos </li>
                        <li> <i className="fas fa-check my-3 bluecolor"></i> food and drinks </li>
                        <li> <i className="fas fa-check my-3 bluecolor"></i> invitation card </li>
                    </ul>
                    <a href="/" class="btn btn-secondary my-3">Check Out</a>
                </div>
            </div>
            <div class="card mb-lg-0 mb-3 card me-lg-2 border border-2" style={{width:"18rem"}}>
                <h5 class="card-header bg-blue text-white text-center py-3 fs-4">For Concerts</h5>
                <div class={props.isDarkMode ? 'card-body text-center bg-dark text-white' : 'card-body text-center '}>
                    <h5 class="card-title my-3 fs-1">₹48,000.00</h5>
                    <ul className='list-unstyled  '>
                        <li><i className="fas fa-check my-3 bluecolor "></i> full services</li>
                        <li> <i className="fas fa-check my-3 bluecolor"></i> decorations </li>
                        <li> <i className="fas fa-check my-3 bluecolor"></i> music and photos </li>
                        <li> <i className="fas fa-check my-3 bluecolor"></i> food and drinks </li>
                        <li> <i className="fas fa-check my-3 bluecolor"></i> invitation card </li>
                    </ul>
                    <a href="/" class="btn btn-secondary my-3">Check Out</a>
                </div>
            </div>
            </div></div>}
            </section>
</>

    )}

