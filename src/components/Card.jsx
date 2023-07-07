import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Card = (props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)"
  });

  return (
    <animated.div ref={ref} className="card" style={{ ...cardAnimation, border: "none", width: '18rem', height: "18rem", backgroundColor: "black", margin: "20px" }}>
      <a href={props.link} className="card-link" target="_blank" rel="noopener noreferrer">
        <div className="card-content">
          <img className="card-img-top" src={props.img} alt="" style={{height: "10rem"}} />
          <div className="card-body" style={{height: "8rem"}}>
            <p className="card-text" style={{ textAlign: "center" }}>
              {props.text}
            </p>
          </div>
        </div>
      </a>
    </animated.div>
  );
};

export default Card;
