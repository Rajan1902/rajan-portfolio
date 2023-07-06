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
    transform: inView ? "translateY(0)" : "translateY(20px)",
  });

  return (
    <animated.div ref={ref} className="card" style={cardAnimation}>
      <a href={props.link} className="card-link" target="__blank">
        <div className="card" style={{ width: "18rem", height: "18rem" }}>
          <img className="card-img-top" src={props.img} alt=""></img>
          <div className="card-body">
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
