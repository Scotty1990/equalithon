import React, { useState } from 'react'
import './cardMain.css'

const CardMain = ({ name, job, about}) => {

  return (
    <div className='Card'>
      <div className="upper-container">
        <div className="image-container">
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/221202150632-kanye-west-file.jpg?c=original" alt="" height="100px" width="100px"/>
        </div>
      </div>
      <div className="lower-container">
        <h3>{ name } </h3>
        <h4>{ job } </h4>
        <p>{ about }</p>
        <button>Visit Profile</button>
      </div>
      
    </div>
  )
}

export default CardMain
