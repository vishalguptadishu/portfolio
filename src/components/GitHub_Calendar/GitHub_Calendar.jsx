import React, { useState } from 'react'
import './GitHub_Calendar.css'

const GitHub_Calendar = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) =>{
        setToggleState(index)
    }
    return (
        <section className='qualification section'>
            <h2 className='section__title'>GitHub Calendar</h2>
            <span className='section__subtitle'>My GitHub Journey</span>
            <div className='container'>
                <div className='container-one' >
                  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=vishalguptadishu&layout=compact" alt="" />
                </div>
              <div className='container-two' >
              <img src="https://github-readme-stats.vercel.app/api?username=vishalguptadishu" alt="" />
              <img src="https://github-readme-streak-stats.herokuapp.com/?user=vishalguptadishu&theme=default" alt="" />
              </div>
              <div  className='container-three' >
              <img src="https://ghchart.rshah.org/vishalguptadishu" alt="" />
              </div>
            </div>

        </section>
    )
}

export default GitHub_Calendar;