import React, { Children } from 'react'
import { Logo } from '../Logo/Logo'

import './Section.css'

export const Section = ({h2}) => {
  return (
    <section className='section-ui'>
    <Logo src='src\imagenes\LogoSena1.png' style='img3'/>
    <h2 className='section-text'>{h2}</h2>
    </section>
   

  )
}
