import React from "react";
import { useTrail, animated } from "react-spring";
import html from '../Assets/html-5.png'
import css from '../Assets/css-3.png'
import javascript from '../Assets/js.png'
import react from '../Assets/react.png'
import jquery from '../Assets/jquery.png'
import nodejs from '../Assets/nodejs.png'
import expressjs from '../Assets/express.png'
import mongodb from '../Assets/mongodb.png'
import git from '../Assets/git.png'
import sass from '../Assets/sass.png'
import php from '../Assets/php.png'
import bootstrap from '../Assets/bootstrap.png'

function Skills() {
  const skillsData = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: javascript },
    { name: "React", image: react },
    { name: "Bootstrap", image: bootstrap },
    { name: "jQuery", image: jquery },
    { name: "Node.js", image: nodejs },
    { name: "Express.js", image: expressjs },
    { name: "MongoDB", image: mongodb },
    { name: "Git", image: git },
    { name: "Sass", image: sass },
    { name: "php", image: php },
  ];

  const trail = useTrail(skillsData.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    delay: 500,
  });

  return (

    <div className="skills" id="skills">
      <h2 className="skillHeading">MY TECH-STACK</h2>
      <hr/>
      <div className="skills-list" style={{marginTop: "2rem"}}>
        {trail.map((style, index) => (
          <animated.div key={index} className="skill" style={style}>
            <img src={skillsData[index].image} alt={skillsData[index].name} />
            <p>{skillsData[index].name}</p>
          </animated.div>
        ))}
      </div>
    </div>

  );
}

export default Skills;
