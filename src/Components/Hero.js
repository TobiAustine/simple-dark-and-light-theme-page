import React from 'react'
import './Hero.css'
import image from '../../src/Assets/shopping.jpg'

const Hero = ({myTheme}) => {
  return (
   <section className="hero" data-theme = {myTheme}>
     <div className="container --flex-between" id='hero'  >
      <div className="text">
        <h1>DivShop Landing Page.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam at animi explicabo eaque voluptatem modi rem exercitationem sint odit id.</p>
        <div className="button">
          <button className='btn'> <a href=""> Learn More</a></button>
          <button className='btn --btn-red'> <a href="">Sign Up</a> </button>
        </div>
      </div>

      <div className="img">
          <img src={image} alt="" width={250} height={250}/>
      </div>
     </div>
   </section>
  )
}

export default Hero