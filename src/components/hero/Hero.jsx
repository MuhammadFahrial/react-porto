import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <div className="hero">

      <div className="hero-img">
        <div className="img"></div>
      </div>

      <div className="hero-text">
        <p>React and React Native</p>
        <h3>Muhammad Fahrial</h3>
        <p className="description">Hi you can call me Rial, I am from Indonesia</p>
      
        <div className="hero-btn">
        <a href="http://" className='btn-download'>Download CV</a>
        <a href="http://" className='btn-talk'>Let's Talk</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero