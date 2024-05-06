import React from 'react'
import { Logo } from '../Logo/Logo'
import './Experience.css'
import imgReact from '../../imagenes/React.png'
import barra1 from '../../imagenes/barra1.png'
import imgNodeJs from '../../imagenes/Nodejs.png'
import imgMongo from '../../imagenes/MongoDB.png'
import barra3 from '../../imagenes/barra3.png'
import imgJava from '../../imagenes/Java.png'
import barra4 from '../../imagenes/barra4.png'

export const Experience = () => {
  return (
    <div className='containerExperience'>
        <div className='containerEx'>
        <Logo src={imgReact} className='img7 '/>
        <Logo src={barra1} className='barras'/>
        <h2 className='pExperience'>Bases</h2>
        </div>
        <div className='containerEx'>
        <Logo src={imgNodeJs} className='img7 '/>
        <Logo src={barra1} className='barras'/>
        <h2 className='pExperience'>Bases</h2>
        </div>
        <div className='containerEx'>
        <Logo src={imgMongo} className='img7 '/>
        <Logo src={barra3} className='barras'/>
        <h2 className='pExperience'>Intermedio</h2>
        </div>
        <div className='containerEx'>
        <Logo src={imgJava} className='img7 '/>
        <Logo src={barra4} className='barras'/>
        <h2 className='pExperience'>Avanzado</h2>
        </div>
        
    </div>
      
  )
}
