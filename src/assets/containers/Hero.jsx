import React from 'react'
import HeroText from './HeroText'
import Video from '../components/Video'

export const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <div className='hero-text'>
        <HeroText greeting= {"Diseños en Blanco y Negro - - - > los colores son las connotaciones de nuestra subjetividad al apreciarlos."}/>
        <img className='chair-hero' src='../src/assets/img/bauhaus-chair.jpg' />
        </div>
        <img className='hero-logo' src='../src/assets/img/hero-logo.svg' />
      </div>
      <Video />
    </div>
  )
}

export default Hero;
