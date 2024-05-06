import React from 'react'
import './Header.css'
import { Logo } from '../../UI/Logo/Logo'
import { Navbar } from '../../UI/Navbar/Navbar'
import { ItemsNavbar } from '../../UI/ItemsNavbar/ItemsNavbar'
import {Footer} from '../Footer/Footer'
import imgProfile from '../../imagenes/Perfil.jpeg'
import LogoSena from '../../imagenes/LogoSena1.png'

export const Header = () => {
  return (
    <header className='header-page'>
      <Logo src={imgProfile} style='imagen1'/>
      <h2 className='underline'>Tatiana Gutierrez</h2>
    
        <Navbar>
          <ItemsNavbar></ItemsNavbar>
        </Navbar>
        <Logo src={LogoSena} style='img2'/>
        <Footer/>
    </header>
  )
}
