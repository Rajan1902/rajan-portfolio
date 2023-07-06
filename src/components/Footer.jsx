import React from 'react';
import { useSpring, useTrail, animated } from 'react-spring';
import insta from '../Assets/insta.png';
import github from '../Assets/github-logo1.png';
import linkedin from '../Assets/linkedin.svg';
import call from '../Assets/call.jpg';
import email from '../Assets/email.avif';
import twitter from '../Assets/twitter.png';

function Footer() {
  const footerAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 2000,
  });

  const images = [
    { src: linkedin, alt: 'LinkedIn', link: 'https://www.linkedin.com/in/rajan-singh-244128204/' },
    { src: github, alt: 'GitHub', link: 'https://github.com/Rajan1902' },
    { src: twitter, alt: 'Twitter', link: 'https://twitter.com/RjnToTweet' },
    { src: insta, alt: 'Instagram', link: 'https://www.instagram.com/_rajan_singh_/' },
    { src: call, alt: 'Call', link: 'tel:+919315935271' },
    { src: email, alt: 'Email', link: 'mailto:rajansinghoo150@gmail.com' },
  ];

  const trail = useTrail(images.length, {
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    delay: 2500,
  });

  return (
    <footer>
      <animated.div style={footerAnimation}>
        <p style={{textAlign: "center"}}>© Copyright(2023) - Rajan Singh</p>
        <div className="footer-container">
          <ul>
            {trail.map((style, index) => (
              <animated.li key={index} style={style}>
                <a href={images[index].link} target="__blank">
                  <img className="footerlogo" src={images[index].src} alt={images[index].alt} />
                </a>
              </animated.li>
            ))}
          </ul>
        </div>
      </animated.div>
    </footer>
  );
}

export default Footer;
