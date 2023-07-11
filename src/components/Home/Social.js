import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";




const Social = () => {
    return (
        <div className='home__social'>
            <a href="https://github.com/vishalguptadishu" className='home__social-icon' target='_blank' rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vishalguptadishu" className='home__social-icon' target='_blank' rel="noreferrer">
           <CiLinkedin />
            </a>
        </div>
     )
}

export default Social;