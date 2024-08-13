import React from 'react'
import './style/footer.css';

const Footer = () => {
  return (
    <footer>
        <div className='footer_links'>
            <a rel="noreferrer" href='//www.linkedin.com/in/valentin-mathieu-6857ab21b' target='_blank'><img src='./assets/icons/linkedin.svg' alt="Mon Linkedin"></img></a>
            <a rel="noreferrer" href='//www.github.com/valentinmth99' target='_blank'><img src='./assets/icons/github.svg' alt='Mon Github'></img></a>
        </div>
        <div className='footer_cc'>Réalisé par Valentin MATHIEU en React. 2024</div>
    </footer>
  )
}

export default Footer;