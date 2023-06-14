import React from 'react'
import { useState, useEffect } from "react";
import { HashLoader } from 'react-spinners';

export default function Review(props) {
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
                <h1 className="head text-center py-5 ">client's <span>review</span></h1>
                    <div className="container d-flex flex-wrap  ">
                        <div className=" rounded overflow-hidden mb-lg-3 mb-3 me-lg-3   border border-3 p-2  " style={{width:"18rem", height:"16rem"}}>
                            <div className="user">
                                <img src="https://imhimanshukr.github.io/evento/images/pic-1.png" alt="" />
                                <div className={props.isDarkMode ? 'text-white' : ''}>
                                    <h3>john deo</h3>
                                    <span>happy clients</span>
                                </div>
                                <i className="fas fa-quote-right fs-1 bluecolor"></i>
                            </div>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam iure nisi unde et assumenda perspiciatis voluptatibus nihil.</p>
                        </div>
                        <div className=" rounded overflow-hidden mb-lg-3 mb-3 me-lg-3 border border-3 p-2" style={{width:"18rem", height:"16rem"}}>
                           
                            <div className="user">
                                <img src="https://imhimanshukr.github.io/evento/images/pic-2.png" alt="" />
                                <div className="user-info">
                                    <h3>john deo</h3>
                                    <span>happy clients</span>
                                </div><i className="fas fa-quote-right fs-1 bluecolor"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam iure nisi unde et assumenda perspiciatis voluptatibus nihil.</p>
                        </div>
                        <div className="rounded  overflow-hidden mb-lg-3 mb-3 me-lg-3 border border-3 p-2" style={{width:"18rem", height:"16rem"}}>
                          
                            <div className="user">
                                <img src="https://imhimanshukr.github.io/evento/images/pic-3.png" alt="" />
                                <div className="user-info">
                                    <h3>john deo</h3>
                                    <span>happy clients</span>
                                </div><i className="fas fa-quote-right fs-1 bluecolor"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam iure nisi unde et assumenda perspiciatis voluptatibus nihil.</p>
                        </div>
                        <div className=" rounded overflow-hidden mb-lg-3 mb-3 me-lg-3 border border-3 p-2"style={{width:"18rem", height:"16rem"}}>
                            
                            <div className="user">
                                <img src="https://imhimanshukr.github.io/evento/images/pic-4.png" alt="" />
                                <div className="user-info">
                                    <h3>john deo</h3>
                                    <span>happy clients</span>
                                </div><i className="fas fa-quote-right fs-1 bluecolor"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam iure nisi unde et assumenda perspiciatis voluptatibus nihil.</p>
                        </div>
                        <div className=" rounded overflow-hidden mb-lg-3 mb-3 me-lg-3 border border-3 p-2"style={{width:"18rem", height:"16rem"}}>
                            
                            <div className="user">
                                <img src="https://imhimanshukr.github.io/evento/images/pic-4.png" alt="" />
                                <div className="user-info">
                                    <h3>john deo</h3>
                                    <span>happy clients</span>
                                </div><i className="fas fa-quote-right fs-1 bluecolor"></i>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor dicta cum. Eos beatae eligendi, magni numquam nemo sed ut corrupti, ipsam iure nisi unde et assumenda perspiciatis voluptatibus nihil.</p>
                        </div>
                    </div></div>}
</section>
             </>
    )
}
