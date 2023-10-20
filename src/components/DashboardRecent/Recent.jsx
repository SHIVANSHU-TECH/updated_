import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import './dashboardRecent.css'
const Recent = ({heading, data}) => {
  return (
    <div className='recent-container'>
      <div className='recent-heading'>
        <h4 className="heading">Total {heading} this month</h4>
        <AiOutlineArrowRight />
      </div>
      <div className="desc">
        <div className="overlay">{data}</div>
        <p className='data'>{data}</p>
      </div>
    </div>
  )
}

export default Recent