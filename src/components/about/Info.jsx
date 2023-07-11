import React from 'react'
import { FaAward } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { BsFillMortarboardFill } from "react-icons/bs";
const Info = () => {
  return (
    <div className='about__info grid'>
        <div className="about__box">
              <BsFillMortarboardFill />
              <h3 className="about__title">Traine </h3>
              <span className='about__subtitle'>5 months FunctionUp</span>
        </div>
        <div className="about__box">
          <FaAward />
            <h3 className="about__title">Experience</h3>
            <span className='about__subtitle'>3 months Internship</span>
        </div>
        <div className="about__box">
            <BiSupport />
            <h3 className="about__title">Support </h3>
            <span className='about__subtitle'>Dish TV</span>
        </div>

    </div>
  )
}

export default Info