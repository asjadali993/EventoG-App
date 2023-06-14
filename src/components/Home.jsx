import React from 'react'

export default function Home(props) {
 return (
        <>
        <section className={props.isDarkMode ? 'dark-mode pb-5' : 'light-mode pb-5'}>
      <h2 className="text-center head py-4 mx-5 ">ITS TIME TO CELEBRATE WITH THE BEST EVENT ORGANIZERS</h2>
            <div id="carouselExampleInterval" className="carousel slide  " data-bs-ride="carousel">
                <div className="carousel-inner carMain">
                    <div className="carousel-item active text-center  carImagediv" data-bs-interval="1500">
                        <img src="https://imhimanshukr.github.io/evento/images/slide-6.jpg" className="h-100" alt="there is " />
                    </div>
                    <div className="carousel-item text-center   carImagediv" data-bs-interval="2000">
                        <img src="https://imhimanshukr.github.io/evento/images/slide-1.jpg" className="h-100" alt="" />
                    </div>
                    <div className="carousel-item text-center   carImagediv" data-bs-interval="2000">
                        <img src="https://imhimanshukr.github.io/evento/images/slide-2.jpg" className="h-100" alt="" />
                    </div>
                    <div className="carousel-item text-center   carImagediv" data-bs-interval="2000">
                        <img src="https://imhimanshukr.github.io/evento/images/slide-3.jpg" className="h-100" alt="" />
                    </div>
                    <div className="carousel-item text-center   carImagediv" data-bs-interval="2000">
                        <img src="https://imhimanshukr.github.io/evento/images/slide-4.jpg" className="h-100" alt="" />
                    </div>
                    <div className="carousel-item text-center   carImagediv" data-bs-interval="2000">
                        <img src="https://imhimanshukr.github.io/evento/images/slide-5.jpg" className="h-100" alt="" />
                    </div>
                  
                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden ">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section></>
    )
}
