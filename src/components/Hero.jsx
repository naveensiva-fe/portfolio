import React from 'react'
import './hero.css'
import myimg from '../images/myimg.png'

function Hero() {
  return (
    <div className='hero'>
        <h1 >About Me</h1>
    <div className='hero-container'>
       <div className='hero-content'>
         <p style={{padding:"0px",margin:"0px",color:"black"}}>Hi There!</p>
        <h1> I'm <span>Naveen</span></h1>
        <h2>BE - Computer Science and Engineering Student</h2>
        <h3>Enthusiastic beginner with a strong foundation in full-stack and Java development. Passionate about building real-world projects, continuously learning, and contributing to team and organizational growth.</h3>
        <div className='button'>Hire Me</div>
       </div>
       <div>
        <img src={myimg} alt="" style={{borderRadius:"60px",marginTop:"10px"}} height={300} width={300}/>
       </div>
    </div>
    </div>
      )
}

export default Hero 