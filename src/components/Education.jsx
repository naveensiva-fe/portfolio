import React from 'react'
import './education.css'

function Education() {
  const educations = [
    { degree: 'B.E. Computer Science', institution: 'Jai Shriram Engineering College', year: '2023-2027', grade: '8.5 CGPA', icon: 'src/images/degree.png' },
    { degree: 'HSC (+2)', institution: 'Government Higher Secondary School', year: '2022-2023', grade: '74%', icon: 'src/images/image.png' },
    { degree: 'SSLC (10th)', institution: 'Government Higher Secondary School', year: '2020-2021', grade: 'Passed', icon: 'src/images/10th.png' }
  ]

  return (
    <>
      <div className='education-container'>
        <h1 style={{fontWeight:"100"}}>Education</h1>
        <div className='education-grid'>
          {educations.map((edu, index) => (
            <div key={index} className='education-card'>
              <img src={edu.icon} alt={edu.degree} className='edu-icon' />
              <h3>{edu.degree}</h3>
              <p className='institution'>{edu.institution}</p>
              <p className='year'>{edu.year}</p>
              <p className='grade'>{edu.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Education