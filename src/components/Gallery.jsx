import React from 'react'
import { useState, useEffect } from "react";
import { HashLoader } from 'react-spinners';




export default function Gallery(props) {

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
           
          /> :
          <div>
           <h1 className="head text-center py-5">our <span>gallery</span></h1>

            <div className="container d-flex flex-wrap ">


                <div className={props.isDarkMode ? 'box' : 'boxLight'}>
                    <img className='w-100 h-100' src="https://imhimanshukr.github.io/evento/images/g-1.jpg" alt="" />
                </div>
                <div className={props.isDarkMode ? 'box' : 'boxLight'}>
                    <img className='w-100 h-100' src="https://imhimanshukr.github.io/evento/images/slide-3.jpg" alt="" />
                </div>
                <div className={props.isDarkMode ? 'box' : 'boxLight'}>
                    <img className='w-100 h-100' src="https://imhimanshukr.github.io/evento/images/g-9.jpg" alt="" />
                </div>

                <div className={props.isDarkMode ? 'box' : 'boxLight'}>
                    <img className='w-100 h-100' src="https://imhimanshukr.github.io/evento/images/g-3.jpg" alt="" />
                </div>

                <div className={props.isDarkMode ? 'box' : 'boxLight'}>
                    <img className='w-100 h-100' src="https://imhimanshukr.github.io/evento/images/g-4.jpg" alt="" />
                </div>

                <div className={props.isDarkMode ? 'box' : 'boxLight'}>
                    <img className='w-100 h-100' src="https://imhimanshukr.github.io/evento/images/g-5.jpg" alt="" />
                </div>

                <div className={props.isDarkMode ? 'box' : 'boxLight'}>
                    <img className='w-100 h-100' src="https://imhimanshukr.github.io/evento/images/g-6.jpg" alt="" />
                </div>

                <div className={props.isDarkMode ? 'box' : 'boxLight'}>
                    <img className='w-100 h-100' src="https://imhimanshukr.github.io/evento/images/g-7.jpg" alt="" />
                </div>

                <div className={props.isDarkMode ? 'box' : 'boxLight'}>
                    <img className='w-100 h-100' src="https://imhimanshukr.github.io/evento/images/g-8.jpg" alt="" />
                </div>
                </div>
             
            </div>
        }
        
        </section></>
    )
}
