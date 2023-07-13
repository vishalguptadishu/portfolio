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
              < img src="https://i.ibb.co/0qqzxCC/project1.png" alt="project1" border="0" />
              <h2>MyCinema</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, delectus, molestiae praesentium neque doloremque rem eos voluptatum </p>
              <hr />
              <div className='skill-boxs'>
                  <p>javascripte</p>
                  <p>HTML</p>
                  <p>CSS</p>
              </div>
              <div className='projects-box-unit-button' >
               <a href="https://github.com/vishalguptadishu/MyCinema"><button>Github</button></a>
               <a href="https://64afa19c84a38d29eea5caa4--spiffy-axolotl-0b1cff.netlify.app/"><button>Live</button></a>
              </div>
            </div>
            <div className='projects-box-unit'>
              < img src="https://i.ibb.co/Svng4Yv/project2.png" alt="project1" border="0" />
              <h2>Layar soppe</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, delectus, molestiae praesentium neque doloremque rem eos voluptatum </p>
              <hr />
              <div className='skill-boxs'>
                  <p>javascripte</p>
                  <p>HTML</p>
                  <p>CSS</p>
              </div>
              <div className='projects-box-unit-button' >
              <a href="https://github.com/vishalguptadishu/layers.shop.clone"> <button>Github</button></a>
              <a href="https://64afa6576b7aa42bb418a47c--spontaneous-cendol-75e292.netlify.app/home.html"><button>Live</button></a> 
              </div>
            </div> 
            
            <div className='projects-box-unit'>
              < img src="https://i.ibb.co/52Lwk89/project3.png" alt="project1" border="0" />
              <h2>Layar soppe</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, delectus, molestiae praesentium neque doloremque rem eos voluptatum </p>
              <hr />
              <div className='skill-boxs'>
                  <p>javascripte</p>
                  <p>HTML</p>
                  <p>CSS</p>
              </div>
              <div className='projects-box-unit-button' >
               <a href="https://github.com/vishalguptadishu/gym_website"><button>Github</button></a>
               <a href="https://boisterous-dango-74662e.netlify.app/"><button>Live</button></a>
              </div>
            </div>
            <div className='projects-box-unit'>
              < img src="https://i.ibb.co/4dWPGq5/project4.png" alt="project1" border="0" />
              <h2>Layar soppe</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, delectus, molestiae praesentium neque doloremque rem eos voluptatum </p>
              <hr />
              <div className='skill-boxs'>
                  <p>javascripte</p>
                  <p>HTML</p>
                  <p>CSS</p>
              </div>
              <div className='projects-box-unit-button' >
               <a href="https://github.com/vishalguptadishu/CLONE_TWITTER"><button>Github</button></a>
               <a href="https://lustrous-horse-2e4aaa.netlify.app/"><button>Live</button></a>
              </div>
            </div>

            </div>
            

         </div>
       </div>
    )
}

export default Projects;