import React from 'react'
import './course.css'   
import dsa from '../images/dsa.png'

function Course() {
  const courses = [
    { title: 'Web Development', skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'], icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png' },
    { title: 'Java DSA', skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Coding Interview'], icon:  dsa  }
  ]

  return (
    <>
      <div className='course-container'>
        <h1 style={{fontWeight:"100"}}>Courses & Certifications</h1>
        <div className='courses-grid'>
          {courses.map((course, index) => (
            <div key={index} className='course-card'>
              <img src={course.icon} alt={course.title} className='course-icon' />
              <h3>{course.title}</h3>
              <div className='skills-list'>
                {course.skills.map((skill, idx) => (
                  <span key={idx} className='skill-badge'>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Course