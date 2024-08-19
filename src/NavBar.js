/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { } from 'react-scroll';

 const NavBar = ()=> {
  return (
    <div>
        <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg  fixed-top">
          <a className="navbar-brand brando" href="#">Om<span>ar</span> Portfol<span>io</span></a>


          <label className="toggle">
            <input type="checkbox" id="dark"/>
            <span className="slider round"></span>
            <i className="fas-fa-moon"></i>
          </label>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <a className="nav-link n-link" href="#land">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link n-link mx-4" href="#about" smooth={true} offset={50} duration={1000}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link n-link mx-4" href="#services" smooth={true} offset={50} duration={1000}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link n-link mx-4" href="#skills"smooth={true} offset={-2000} duration={1000}>Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link n-link mx-4" href="#contact"smooth={true} offset={180} duration={1000}>Contact Us</a>
              </li>
              
            </ul>
            <button className='botn'>Subcribe</button>
          </div>
          
        </nav>
        </div>
    </div>
  )
}
export default NavBar ;