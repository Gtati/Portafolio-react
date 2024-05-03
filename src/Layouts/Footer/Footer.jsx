import React from 'react'

import { ItemsNavbar } from '../../UI/ItemsNavbar/ItemsNavbar'
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import './Footer.css'

export const Footer = () => {
  return (
   <ul className='SocialR'>
        <ItemsNavbar content={<FaLinkedin />} style='list2' href=''/>
        <ItemsNavbar content={<FaFacebook />} style='list2' href=''/>
        <ItemsNavbar content={<FaInstagram />} style='list2' href=''/>
        <ItemsNavbar content={<FaTwitter />} style='list2' href=''/>
        <ItemsNavbar content={<FaWhatsapp />} style='list2' href=''/>
        
        </ul>
    
  )
}
