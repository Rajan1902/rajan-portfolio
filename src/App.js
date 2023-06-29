import React from 'react';
import './App.scss';
import Banner from './components/Banner'
import Footer from './components/Footer'

import Card from './components/Card';
import blog from './Assets/ProjectImg.png'
import netflix from './Assets/netlix1.png'
import todo from './Assets/todo.png'
import taxwisey from './Assets/taxwisey.png'

function App() {
  return (
    <div className="App">
     <Banner/>
     <hr/>
     <div className='mobile'>
     <h4 className='project-title'>Checkout some of my work</h4>
     <div className='project-cards'>

     <Card className="card-arrange" img={blog} link={"https://jocular-moonbeam-a96b4f.netlify.app/"} text={"A blog website that I made as a sample for some client"}></Card>
        <Card className="card-arrange" img={netflix} link={"https://netflix-desktop-clone.netlify.app/"} text={"A simple clone website for netflix desktop which uses movieDB api for data."}></Card>
        <Card className="card-arrange" img={todo} link={"https://todo-rajan.netlify.app/"} text={"A simple to-do list mode with react which uses browser storage to keep your tasks stored even when the page is refreshed."}></Card>
        <Card className="card-arrange" img={taxwisey} link={"https://taxwisey.com/#"} text={"I worked on this website as an intern with Tax Wisey."}></Card>
        </div>
        </div>
        <hr></hr>
      <Footer/>
    </div>
  );
}

export default App;
