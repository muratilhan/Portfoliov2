import React from 'react'
import Typewriter from 'typewriter-effect';
import './introduction.css'
import photo from '../photos/murat-foto.jpg'


const Intoduction = () => {


  return (
    <div id='home' index="0" className='introduction deneme'>
        <div className="introduction-main">
            
        <h2 className='content'>
        <Typewriter
          options={{
              strings: ['I`m Murat İlhan', 'I`m a Software Developer'],
              autoStart: true,
              loop: true,
          }}
          />
        </h2>
          <p>I am currently studying Computer Science at Uludağ University. 
            I have been actively involved in web programming for the past 2 years, specializing in developing full-stack applications.
            I have a strong passion for learning and constantly improving myself in this field. 
            I enjoy keeping up with new technologies and strive to expand my knowledge. 
            I believe in the power of continuous learning and am always eager to explore new technologies to enhance my skills.
          </p>
          <ul className='intro-icon-container'>
            <a href="https://github.com/muratilhan" target='_blank'><li><i className="fa-brands fa-github"></i></li></a>
            <a href="https://www.linkedin.com/in/murat-ilhan-2762b8219/" target='_blank'><li><i className="fa-brands fa-linkedin"></i></li></a>
            <a href="https://www.instagram.com/" target='_blank'><li><i className="fa-brands fa-instagram"></i></li></a>
          </ul>
          <img src={photo} alt="" />
        </div>
    </div>
  )
}

export default Intoduction