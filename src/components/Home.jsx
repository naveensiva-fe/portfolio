import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
    <div className='nav-containers'>
        <img src="https://img.freepik.com/premium-vector/ns-letter-logo-design-icon_679026-799.jpg" alt="Logo"   width={80} height={80}/>
      <div>
        <nav className='nav-container'>
                <a href="#home">Home</a>
                <a href="#hero">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
    </>
  )
}

export default Home