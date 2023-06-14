import React from 'react'

export default function Footer(props) {
  return (
    <section className={props.isDarkMode ? 'dark-mode' : 'footer-white'}>
<hr />
    <div className="container d-lg-flex d-block justify-content-evenly pt-5">

        <div className="footer-a">
            <h3>Branches</h3>
            <a href="/"> <i className="fas fa-map-marker-alt"></i> mumbai </a>
            <a href="/"> <i className="fas fa-map-marker-alt"></i> pune </a>
            <a href="/"> <i className="fas fa-map-marker-alt"></i> goregaon </a>
            <a href="/"> <i className="fas fa-map-marker-alt"></i> delhi </a>
            <a href="/"> <i className="fas fa-map-marker-alt"></i> hydrabad </a>
            <a href="/"> <i className="fas fa-map-marker-alt"></i> j & k </a>
        </div>

        <div className="footer-a">
            <h3>Quick links</h3>
            <a href="/"> <i className="fas fa-arrow-right"></i> home </a>
            <a href="/"> <i className="fas fa-arrow-right"></i> service </a>
            <a href="/"> <i className="fas fa-arrow-right"></i> about </a>
            <a href="/"> <i className="fas fa-arrow-right"></i> gallery </a>
            <a href="/"> <i className="fas fa-arrow-right"></i> price </a>
            <a href="/"> <i className="fas fa-arrow-right"></i> reivew </a>
            <a href="/"> <i className="fas fa-arrow-right"></i> contact </a>
        </div>

        <div className="footer-a">
            <h3>Contact info</h3>
            <a href="/"> <i className="fas fa-phone"></i> +123-456-7890 </a>
            <a href="/"> <i className="fas fa-envelope"></i> Asjad@gmail.com</a>
            <a href="/"> <i className="fas fa-map-marker-alt"></i> Maharashtra, india </a>
        </div>

        <div className="footer-a">
            <h3>Follow us</h3>
            <a href="/"> <i className="fab fa-facebook-f"></i> facebook </a>
            <a href="/"> <i className="fab fa-twitter"></i> twitter </a>
            <a href="/"> <i className="fab fa-instagram"></i> instagram </a>
            <a href="/"> <i className="fab fa-linkedin"></i> linkedin </a>
        </div>

    </div>

    <div className="credit"> <span>www.EventoG.com</span> || all rights reserved </div>

</section>
  )
}
