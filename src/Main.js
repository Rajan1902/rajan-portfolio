import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App'
import Collaborate from './components/Collaborate'
const Main = () => {
  return (
    <Router>
    <Routes>
    
    <Route path='/' element = {<App/>}></Route>
    <Route path='/collab' element = {<Collaborate/>}></Route>
    </Routes>
    </Router>
  )
}

export default Main;