import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div id="contact" index="3" className='contact-container deneme'>
        <div className='contact-main'>
            <ul>
                <a href="https://github.com/muratilhan" target='_blank'><li><i class="fa-brands fa-github"></i></li></a>
                <a href="https://www.linkedin.com/in/murat-ilhan-2762b8219/" target='_blank'><li><i class="fa-brands fa-linkedin"></i></li></a>
                <a href="https://www.instagram.com/" target='_blank'><li><i class="fa-brands fa-instagram"></i></li></a>
                <a href="https://www.youtube.com/channel/UCsypit4r66dQH-R-HUUYygg" target='_blank'><li><i class="fa-brands fa-youtube"></i></li></a>
                
            </ul>
            <p>Thank you for visiting! Explore my works and give me some advices.</p>
        </div>
    </div>
  )
}

export default Contact