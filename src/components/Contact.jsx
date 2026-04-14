import React from 'react'
import './contact.css'

function Contact() {
  return (
    <>
    <div className='contact-container'>
        <h1 style={{fontWeight:"100"}}>Contact Me</h1>
        <div className='contact-content'>
            <div className='contact-icons'>
                <a href="mailto:naveennaveen39888@gmail.com" className='contact-link'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" className='contact-icon' />
                    <span>Email</span>
                </a>
                <a href="tel:+919786296020" className='contact-link'>
                    <svg className='contact-icon' viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span>Phone</span>
                </a>
                <a href="https://www.linkedin.com/in/naveen-kumar-123456789/" target="_blank" rel="noopener noreferrer" className='contact-link'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className='contact-icon' />
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/naveensiva-fe" target="_blank" rel="noopener noreferrer" className='contact-link'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className='contact-icon' />
                    <span>GitHub</span>
                </a>
            </div>
            <div className='download-section'>
                <a href="/resume.pdf" download="Naveen_Kumar_Resume.txt" className='download-btn'>
                    <svg className='download-icon' viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                        <path d="M8.5 17L12.5 21L16.5 17H13V13H11V17H8.5Z" />
                    </svg>
                    Download Resume
                </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact