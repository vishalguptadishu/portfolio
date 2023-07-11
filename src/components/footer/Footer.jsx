import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h2 className='footer__title'>Vishal Gupta</h2>

            <ul className='footer__list'>
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>
                <li>
                    <a href="#Projects" className='footer__link'>Projects</a>
                </li>
                <li>
                    <a href="#about" className='footer__link'>Testimonials</a>
                </li>
            </ul>

            <div className='footer__social'>
                <a href="https://github.com/vishalguptadishu" className='footer__social-icon' target='_blank' rel="noreferrer">
                <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/vishalguptadishu" className='footer__social-icon' target='_blank' rel="noreferrer">
                <CiLinkedin />
                </a>  
            </div>
            <span className='footer__copy'>
                &#169; Vishal Gupta. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer