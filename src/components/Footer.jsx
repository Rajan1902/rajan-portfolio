import React from 'react'
import insta from '../Assets/insta.png'
import github from '../Assets/github-logo1.png'
import linkedin from '../Assets/linkedin.svg'
import call from '../Assets/call.jpg'
import email from '../Assets/email.avif'
import twitter from '../Assets/twitter.png'

function Footer() {
  return (
    
        <footer>
            <p>© Copyright - Rajan Singh (2023) </p>
            <hr />
            <div className="footer-container">
            <ul>
                <li><a href='https://www.linkedin.com/in/rajan-singh-244128204/' target='__blank' ><img className='footerlogo' src={linkedin} alt="" /></a></li>
                <li><a href='https://github.com/Rajan1902' target='__blank'><img className='footerlogo' src={github} alt="" /></a></li>
                <li><a href='https://twitter.com/RjnToTweet' target='__blank'><img className='footerlogo' src={twitter} alt="" /></a></li>
                <li><a href='https://www.instagram.com/_rajan_singh_/'  target='__blank'><img className='footerlogo' src={insta} alt="" /></a></li>
                <li><a href='tel:+919315935271' target='__blank'><img className='footerlogo' src={call} alt="" /></a></li>
                <li><a href='mailto:rajansinghoo150@gmail.com' target='__blank'><img className='footerlogo' src={email} alt="" /></a></li>
                
            </ul>
            </div>

        </footer>
  )
}

export default Footer