import React from 'react'
import './style/footer.css';

const Footer = () => {
  return (
    <footer>
        <div className='footer_links'>
            <img src='./assets/icons/linkedin.svg' alt="Mon Linkedin"></img>
            <img src='./assets/icons/github.svg' alt='Mon Github'></img>
        </div>
        <div className='footer_cc'>Réalisé par Valentin MATHIEU en React. 2024</div>
    </footer>
  )
}

export default Footer;