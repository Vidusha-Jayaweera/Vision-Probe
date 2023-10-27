import React from 'react'
import Header from '../components/header';
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import VoiceRecognition from '../components/voice';
import MyComponent from '../components/useVoiceRecognition';

function Homepage() {
    return (

        <>
        <div className="App">
            <Header/>
            <hr></hr>
            <section id="hero" >
    <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

      <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div className="carousel-inner" role="listbox">

        <div className="carousel-item active" style={{"backgroundImage": "url(assets/img/slide/home.jpg)"}}>
          <div className="container" style={{marginTop:'200px'}}>
            <h2>" Enhancing Your Visual Health  <span> Online "</span></h2>
            <p>"Discover comprehensive online vision care services and solutions to improve and maintain your visual health and eye wellness."</p>
           <Link to='/profile+login'> <a href="#about" className="btn-get-started scrollto">Read More</a></Link>
          </div>
        </div>

      </div>

      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
      </a>

      <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>

    </div>
  </section>


  <section id="featured-services" class="featured-services">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><iconify-icon icon="icon-park:voice-one" style={{color: 'lightskyblue;'}} width="50"></iconify-icon></div>
              <h4 class="title"><a href="">Voice Based Navigation</a></h4>
              <p class="description"><MyComponent/></p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
            <div class="icon"><iconify-icon icon="mdi:video-outline" style={{color: "lightskyblue"}} width='50'></iconify-icon></div>
              <h4 class="title"><a href="">Virtual Consultation</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><iconify-icon icon="logos:google-marketing-platform" width='50px'></iconify-icon></div>
              <h4 class="title"><a href="">Marketplace</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><iconify-icon icon="fontisto:low-vision" style={{color: "lightskyblue"}} width="50"></iconify-icon></div>
              <h4 class="title"><a href="">Vision Care Tests</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>
          </div>

        

      </div>
    </section>
      
</div>


        
            <Footer/>
        
    </>
    ) 
}

export default Homepage;