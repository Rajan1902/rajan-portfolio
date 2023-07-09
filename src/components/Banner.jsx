
import { useSpring, animated } from "react-spring";
import bannerImg from "../Assets/rajan.png";
import "bootstrap/dist/css/bootstrap.min.css";
import resume from "../Assets/RajanFinalYearResume.pdf";
import logo from '../Assets/rajan-logo-nobg.png';
import {Link} from 'react-router-dom'

function Banner() {



  const headingAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const subHeadingAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1500,
  });


  return (
    <section>
      <div className="main-container">
        <img src={logo} alt="" className="logo" />
        <div className="banner">
          <div className="insideBanner">
            <animated.h1 style={headingAnimation}>Hey! I'm <span style={{color: "#0dcaf0", fontFamily: "cursive"}}>RAJAN SINGH</span></animated.h1>
            <animated.h3 style={subHeadingAnimation} className="bannerSubText">I'm a <span style={{color: "#0dcaf0", fontFamily: "cursive"}}>full stack web developer</span> </animated.h3>
          </div>
          <div className="insideBanner imgdiv">
            <img src={bannerImg} alt="" />
            <a href={resume}>
              <button className="btn btn-outline-info">Download CV</button>
            </a>
            <Link to="/collab">
     <button type="button" className="btn btn-outline-info">
          Collaborate
     </button>
 </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
