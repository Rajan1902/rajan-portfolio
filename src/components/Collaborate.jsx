import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer'
import Coffee from '../Assets/coffee.png'
import Logo from '../Assets/rajan-logo-nobg.png'
const Collaborate = () => {
    // const [goToHome, setGoToHome] = useState(false);
    
  return (
    <div>
      <img src={Logo} alt="" className="logo" />
    <div className='container text-center collabMain' style={{maxWidth: '70%'}}>
     <h1>Feel free to reach out to me through any of these platforms below</h1> 
     <p>Coffee on me!</p>
     <img src={Coffee} alt="" className='coffeeImg'/>
     </div>
      <Footer></Footer>
      <div className="container text-center">
      <Link to='/'>
        
        <button className='btn btn-outline-info' style={{width: "10rem", marginBottom: "1rem"}}>Go back</button>
      </Link>
      </div>
    </div>
  )
}

export default Collaborate