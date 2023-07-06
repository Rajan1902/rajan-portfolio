import './App.scss';
import { useSpring, useTransition, animated } from 'react-spring';
import Banner from './components/Banner';
import Footer from './components/Footer';

import Card from './components/Card';
import blog from './Assets/ProjectImg.png';
import netflix from './Assets/netlix1.png';
import todo from './Assets/todo.png';
import taxwisey from './Assets/taxwisey.png';

function App() {
  const bannerAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
  const titleAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });

  const projects = [
    { img: blog, link: "https://jocular-moonbeam-a96b4f.netlify.app/", text: "A blog website that I made as a sample for some client" },
    { img: netflix, link: "https://netflix-desktop-clone.netlify.app/", text: "A simple clone website for netflix desktop which uses movieDB api for data." },
    { img: todo, link: "https://todo-rajan.netlify.app/", text: "A simple to-do list mode with react which uses browser storage to keep your tasks stored even when the page is refreshed." },
    { img: taxwisey, link: "https://taxwisey.com/#", text: "I worked on this website as an intern with Tax Wisey." }
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
      <hr />
      <div className='mobile'>
        <animated.h4 style={titleAnimation} className='project-title'>Checkout some of my work</animated.h4>
        <div className='project-cards'>
          {transitions((style, project) => (
            <animated.div style={{ ...style }} className='card-arrange'>
              <Card img={project.img} link={project.link} text={project.text} />
            </animated.div>
          ))}
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
