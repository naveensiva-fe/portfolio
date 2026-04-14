import React from 'react'
import './participation.css'

function Participation() {
  const competitions = [
    { title: 'Jumbled Codes', result: '1st Place', org: 'Jai Shriram Engineering College', icon: 'https://cdn-icons-png.flaticon.com/512/4436/4436481.png' },
    { title: 'Sakthi Hackathon 1.0', result: 'Team Winner', org: 'Team-based Challenge', icon: 'https://cdn-icons-png.flaticon.com/512/3050/3050159.png' },
    { title: 'TN Skills Web Dev', result: 'Participated', org: 'Round 1 Qualified', icon: 'https://cdn-icons-png.flaticon.com/512/753/753490.png' }
  ]

  return (
    <>
      <div className='competition-container'>
        <h1 style={{fontWeight:"100"}}>Competitions & Achievements</h1>
        <div className='competition-grid'>
          {competitions.map((comp, index) => (
            <div key={index} className='competition-card'>
              <img src={comp.icon} alt={comp.title} className='comp-icon' />
              <h3>{comp.title}</h3>
              <p className='result'>{comp.result}</p>
              <p className='org'>{comp.org}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Participation