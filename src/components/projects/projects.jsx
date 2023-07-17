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
              < img src="https://i.ibb.co/Xk8RGpF/Screenshot-1156.png" alt="project1" border="0" />
              <h2>DishuShop</h2>
              <p>Developed an e-commerce website with extensive product catalog, add to cart, user accounts, and responsive design.</p>
              <hr />
              <div className='skill-boxs'>
                  <p>javascript</p>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>React Js</p>
              </div>
              <div className='projects-box-unit-button' >
               <a href="https://github.com/vishalguptadishu/E-commerce"><button>Github</button></a>
               <a href="https://jovial-moonbeam-327fe0.netlify.app/"><button>Live</button></a>
              </div>
            </div>
            <div className='projects-box-unit'>
              < img src="https://i.ibb.co/0qqzxCC/project1.png" alt="project1" border="0" />
              <h2>MyCinema</h2>
              <p>Utilized React to develop a MyCinema website, closely resembling the features and aesthetics of the original platform</p>
              <hr />
              <div className='skill-boxs'>
                  <p>javascript</p>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>React Js</p>
              </div>
              <div className='projects-box-unit-button' >
               <a href="https://github.com/vishalguptadishu/MyCinema"><button>Github</button></a>
               <a href="https://64afa19c84a38d29eea5caa4--spiffy-axolotl-0b1cff.netlify.app/"><button>Live</button></a>
              </div>
            </div>
            <div className='projects-box-unit'>
              < img src="https://i.ibb.co/Svng4Yv/project2.png" alt="project1" border="0" />
              <h2>Layers.Shop </h2>
              <p>Developed a clone of layers.shop using HTML, JavaScript, and CSS, mirroring its functionality and features.</p>
              <hr />
              <div className='skill-boxs'>
                  <p>JavaScript</p>
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
              <h2>Gym Website</h2>
              <p>Developed a responsive gym website using HTML, CSS, and React Js, providing an interactive user experience and adapting seamlessly to different devices</p>
              <hr />
              <div className='skill-boxs'>
                  <p>javascript</p>
                  <p>React Js</p>
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
              <h2>Twitter Clone</h2>
              <p>Developed a Twitter clone using HTML, CSS, and React Js, closely resembling the core functionalities and user interface of the original platform</p>
              <hr />
              <div className='skill-boxs'>
                  <p>javascript</p>
                  <p>React Js</p>
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