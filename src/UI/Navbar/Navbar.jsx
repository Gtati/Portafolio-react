import React from 'react'
import './Navbar.css'
import { ItemsNavbar } from '../ItemsNavbar/ItemsNavbar'
export const Navbar = () => {
  return (

    <nav>
        <ul>
        <ItemsNavbar content='Perfil' style='list1' href=''/>
        <ItemsNavbar content='Proyectos' style='list1' href=''/>
        <ItemsNavbar content='Referencias' style='list1' href=''/>
        <ItemsNavbar content='Experiencias' style='list1' href=''/>
      

        </ul>
    </nav>
  )
}
