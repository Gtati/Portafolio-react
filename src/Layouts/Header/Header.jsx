import React from 'react'
import './Header.css'
import { Logo } from '../../UI/Logo/Logo'
import { Navbar } from '../../UI/Navbar/Navbar'
import { ItemsNavbar } from '../../UI/ItemsNavbar/ItemsNavbar'
import {Footer} from '../Footer/Footer'

export const Header = () => {
  return (
    <header className='header-page'>
      <Logo src='src/imagenes/Perfil.jpeg' style='imagen1'/>
      <h2 className='underline'>Tatiana Gutierrez</h2>
    
        <Navbar>
          <ItemsNavbar></ItemsNavbar>
        </Navbar>
        <Logo src='src\imagenes\LogoSena1.png' style='img2'/>
        <Footer/>
    </header>
  )
}
