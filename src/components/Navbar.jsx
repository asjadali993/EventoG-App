import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <><section >
      <nav className="navbar py-0 navbar-expand-lg   " data-bs-theme="dark">
        <div className={props.isDarkMode ? 'container-fluid bg-secondary py-2 navgrey ' : 'container-fluid py-2 bg-primary navgradiant'}>
          <a className="navbar-brand rounded px-2 navgradiant" href="/"><span className="logo">E</span>ventorG</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" rounded collapse navbar-collapse  d-lg-flex pe-3 justify-content-end  " id="navbarSupportedContent">


            <ul className="navbar-nav  mb-2 mb-lg-0">



              <li className="nav-item">
                <a className="nav-link " href="/">Home</a>
              </li>


              <li className="nav-item">
                <Link className="nav-link "  to="/Services">Service</Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Price">Price</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Review">Review</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ContactUs">Contact</Link>
              </li>
            </ul>

          </div>

          <span className='monn-icon' onClick={props.toggle}>{props.isDarkMode ? <i className="fas fa-sun"></i> : <i class="fas fa-moon"></i>}</span>

        </div>
      </nav>
    </section>
    </>
  )
};
