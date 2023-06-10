import React from 'react'
import './skillsAndTechs.css'
import skillsData from './skillsData'

const SkillsAndTechs = () => {
  return (
    <div id="skills" index="2" className='skills-container deneme'>
        <div className="skills-main">
        <div className='skills-header'>
          <h2>Skills & Technologies</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi officiis aspernatur neque odit non eius modi quia suscipit unde iste, perferendis similique libero atque incidunt, earum repudiandae. Alias, magnam.</p>
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