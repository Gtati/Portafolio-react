import React from 'react'
import { Logo } from '../Logo/Logo'
import './Experience.css'

export const Experience = () => {
  return (
    <div className='containerExperience'>
        <div className='containerEx'>
        <Logo src='src\imagenes\React.png' className='img7 '/>
        <Logo src='src\imagenes\barra1.png' className='barras'/>
        <h2 className='pExperience'>Bases</h2>
        </div>
        <div className='containerEx'>
        <Logo src='src\imagenes\Nodejs.png' className='img7 '/>
        <Logo src='src\imagenes\barra1.png' className='barras'/>
        <h2 className='pExperience'>Bases</h2>
        </div>
        <div className='containerEx'>
        <Logo src='src\imagenes\MongoDB.png' className='img7 '/>
        <Logo src='src\imagenes\barra3.png' className='barras'/>
        <h2 className='pExperience'>Bases</h2>
        </div>
        <div className='containerEx'>
        <Logo src='src\imagenes\Java.png' className='img7 '/>
        <Logo src='src\imagenes\barra4.png' className='barras'/>
        <h2 className='pExperience'>Bases</h2>
        </div>
        
    </div>
      
  )
}
