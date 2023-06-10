import React, { useState } from 'react'
import './popUp.css'


const PopUp = ({toggleModal, imgSource}) => {

  return (
      <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <img src={imgSource} alt="" />
            <i onClick={toggleModal} class="fa-solid fa-circle-xmark close-modal"></i>
            
          </div>
      </div>
  )
}

export default PopUp