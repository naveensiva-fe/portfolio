import React, { useEffect } from 'react'
import Home from './Home'
import Hero from './Hero'
import './Main.css'
import Education from './Education'
import Projects from './Projects'
import Tools from './Tools'
import Course from './Course'
import Footer from './Footer'
import Participation from './Participation'
import Contact from './Contact'

function Main() {
  useEffect(() => {
    const sections = document.querySelectorAll('#hero, #education, #projects, #tools, #course, #participation, #contact');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <div className='main-container'>
        <div id='home' className='home'>
            <Home/>
        </div>
        <div id='hero' className='hero'>
            <Hero/>
        </div>
        <div id='education' className='education'>
            <Education/>
        </div>
        <div id='projects' className='projects'>
            <Projects/>
        </div>
        <div id='tools' className='tools'>
            <Tools/>
        </div>
        <div id='course' className='course'>
            <Course/>
        </div>
        <div id='participation' className='competetion'>
            <Participation/>
        </div>
        <div id='contact' className='contect'>
             <Contact/>
        </div>
        <div id='footer' className='footer'>
            <Footer/>
        </div>
    </div>
    </>
  )
}

export default Main