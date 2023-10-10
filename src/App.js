import './App.scss';
import React from 'react';
import { useSpring, useTransition, animated } from 'react-spring';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Skills from './components/Skills'
import Card from './components/Card';
import blog from './Assets/ProjectImg.png';
import netflix from './Assets/netlix1.png';
import todo from './Assets/todo.png';
import taxwisey from './Assets/taxwisey.png';
import IndianMeals from './Assets/indianmeals.png'
import ReduxBank from './Assets/reduxBank.png'

function App() {
  const bannerAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
  const titleAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });

  const projects = [
    {img: IndianMeals, link: "https://indianmeals.netlify.app/", text: "Food Delivery web app made with react"},
    { img: blog, link: "https://jocular-moonbeam-a96b4f.netlify.app/", text: "A blog website that I made as a sample for some client" },
    { img: netflix, link: "https://netflix-desktop-clone.netlify.app/", text: "Netflix Desktop landing page clone (frontend)"},
    { img: todo, link: "https://todo-rajan.netlify.app/", text: "ToDo list web app made with react.js" },
    { img: taxwisey, link: "https://taxwisey.com/#", text: "I worked on this website as an intern with Tax Wisey." },
    {img: ReduxBank, link : "https://reduxbank.netlify.app/", text : "Banking web app using react with redux"},
  ];

  const transitions = useTransition(projects, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    trail: 400,
  });

  return (
    <div className="App">
      <animated.div style={bannerAnimation}>
        <Banner />
      </animated.div>
      <Skills/>
      <div className='mobile'>
        <animated.h4 style={titleAnimation} className='project-title'>CHECKOUT SOME OF MY WORK</animated.h4>
        <hr/>
        <div className='project-cards'>
          {transitions((style, project) => (
            <animated.div style={{ ...style }} className='card-arrange'>
              <Card img={project.img} link={project.link} text={project.text} />
            </animated.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
