import {Link, Navigate } from "react-router-dom";
import '../../index.css';

function Header() {
     return(
      <>
        
  <div id="topbar" class="d-flex align-items-center fixed-top">
    <div class="container d-flex align-items-center justify-content-center justify-content-md-between">
      <div class="align-items-center d-none d-md-flex">
        <i class="bi bi-clock"></i> 24 Hours service
      </div>
      <div class="d-flex align-items-center">
        <i class="bi bi-phone"></i> Call us now +94 xxxxxxxx
      </div>
    </div>
  </div>


  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt=""/></a> */}
     
      - <h1 class="logo me-auto"><a href="index.html">Vision-Vital</a></h1> 

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto " href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto" href="#doctors">Doctors</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <a href="#appointment" class="appointment-btn scrollto"><span class="d-none d-md-inline">Make an</span> Appointment</a>

    </div>
  </header>
        </>
     );


}

export default Header;