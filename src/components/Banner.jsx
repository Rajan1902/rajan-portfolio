import React from "react";
import bannerImg from "../Assets/rajan.png";
import "bootstrap/dist/css/bootstrap.min.css";
import resume from "../Assets/RajanFinalYearResume.pdf";
import logo from '../Assets/rajan-logo-nobg.png'

function Banner() {
  const buttonHandler = ()=>{
    window.open('mailto:rajansinghoo150@gmail.com', '_blank');
  }
  return (
    <section>

      <div className="main-container">
      <img src={logo} alt="" className="logo"/>
      <div className="banner">
        
    
        <div className="insideBanner">
          <h1>Hey! my name is Rajan Singh</h1>
          <h3>And I'm a full stack web developer</h3>

        </div>
        <div className="insideBanner imgdiv">
          <img src={bannerImg} alt="" />
          <a href={resume}>
            <button className="btn btn-outline-light">Download CV</button>
          </a>
          <button className="btn btn-outline-light" onClick={buttonHandler}>Collaborate</button>
          
         
        </div>
      </div>
      </div>

    </section>
  );
}

export default Banner;
