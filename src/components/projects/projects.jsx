import React from 'react'
import './projects.css'

import "swiper/css";
import "swiper/css/pagination";




const Projects = () => {
    return (
       <div className='section' id='Projects' >
         <h1 className='section__title ' >Projects</h1>
         <span className='section__subtitle'>My Projects</span>
         <div className='container  ' >
            <div className='projects-box' >
            <div className='projects-box-unit'>
              < img src="https://i.ibb.co/T06TCSQ/project1.png" alt="project1" border="0" />
              <h2>Layar soppe</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, delectus, molestiae praesentium neque doloremque rem eos voluptatum </p>
              <hr />
              <div className='skill-boxs'>
                  <p>javascripte</p>
                  <p>HTML</p>
                  <p>CSS</p>
              </div>
              <div className='projects-box-unit-button' >
               <button><a href="https://github.com/vishalguptadishu/layers.shop.clone">Github</a> </button>
               <button><a href="https://vishalguptadishu.github.io/layers.shop.clone/home.html">Live</a></button>
              </div>
            </div>
            <div className='projects-box-unit'>
              < img src="https://i.ibb.co/T06TCSQ/project1.png" alt="project1" border="0" />
              <h2>Layar soppe</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, delectus, molestiae praesentium neque doloremque rem eos voluptatum </p>
              <hr />
              <div className='skill-boxs'>
                  <p>javascripte</p>
                  <p>HTML</p>
                  <p>CSS</p>
              </div>
              <div className='projects-box-unit-button' >
               <button>Github</button>
               <button>Live</button>
              </div>
            </div> 
            <div className='projects-box-unit'>
              < img src="https://i.ibb.co/T06TCSQ/project1.png" alt="project1" border="0" />
              <h2>Layar soppe</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, delectus, molestiae praesentium neque doloremque rem eos voluptatum </p>
              <hr />
              <div className='skill-boxs'>
                  <p>javascripte</p>
                  <p>HTML</p>
                  <p>CSS</p>
              </div>
              <div className='projects-box-unit-button' >
               <button>Github</button>
               <button>Live</button>
              </div>
            </div>
            <div className='projects-box-unit'>
              < img src="https://i.ibb.co/T06TCSQ/project1.png" alt="project1" border="0" />
              <h2>Layar soppe</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, delectus, molestiae praesentium neque doloremque rem eos voluptatum </p>
              <hr />
              <div className='skill-boxs'>
                  <p>javascripte</p>
                  <p>HTML</p>
                  <p>CSS</p>
              </div>
              <div className='projects-box-unit-button' >
               <button>Github</button>
               <button>Live</button>
              </div>
            </div>
            <div className='projects-box-unit'>
              < img src="https://i.ibb.co/T06TCSQ/project1.png" alt="project1" border="0" />
              <h2>Layar soppe</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, delectus, molestiae praesentium neque doloremque rem eos voluptatum </p>
              <hr />
              <div className='skill-boxs'>
                  <p>javascripte</p>
                  <p>HTML</p>
                  <p>CSS</p>
              </div>
              <div className='projects-box-unit-button' >
               <button>Github</button>
               <button>Live</button>
              </div>
            </div>

            </div>
            

         </div>
       </div>
    )
}

export default Projects;