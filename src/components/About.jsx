import React from 'react'
import { useState, useEffect } from "react";
import { HashLoader } from 'react-spinners';

export default function About(props) {
  
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

    <h1 className="head text-center py-5"><span>About</span> us </h1>
    
    <div className="row justify-content-center">
    
        <div className="col-lg-4 col-8  image me-3">
            <img className='w-100' src="https://imhimanshukr.github.io/evento/images/about-img.jpg" alt="about us"/>
        </div>
    
        <div className=" pt-lg-0 pt-3 col-lg-5 col-10  content">
            <h2>We will give a very special celebration for you</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore fugiat ut esse perferendis perspiciatis provident dolores fuga in facilis culpa possimus, quia praesentium itaque, sapiente quasi harum rem asperiores.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero expedita incidunt provident quibusdam aut odit, numquam nesciunt similique nisi.</p>
            <a href="/" className="btn btn-secondary">contact us</a>
        </div>
    </div></div>
    }
    </section>
    </>
  )
}
