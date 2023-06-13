import React from 'react'
import './skillsAndTechs.css'
import skillsData from './skillsData'

const SkillsAndTechs = () => {
  return (
    <div id="skills" index="2" className='skills-container deneme'>
        <div className="skills-main">
        <div className='skills-header'>
          <h2>Skills & Technologies</h2>
          <p> I showcase my skills in areas as shown below. I'm a passionate developer specializing in creating engaging and interactive web applications.
            I aim to display the projects I've built using these skills. You can also advice me to learn which technologies should i learn in the future. </p>
        </div>
        <ul>
            {skillsData.map(item => (
              <li>
                <h3> {item.skills} </h3>
                <p> {item.description} </p>
              </li>
            ))}
        </ul>

        </div>
        
    </div>
  )
}

export default SkillsAndTechs