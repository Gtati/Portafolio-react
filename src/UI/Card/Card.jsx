import React from 'react'
import './Card.css'
import imgProyectos  from '../../imagenes/proyectos.jpg'

export const Card = () => {
  return (
    <div className='cards'>
   <div className='card'>
    <img src={imgProyectos} alt="" className='img4'/>
    <div class="card-content">
      <h3>Tittle</h3>
      <p>Descripcion</p>
      <a className='cardA' href="">Ir al proyecto</a>
    </div>
   </div>
   </div>
  )
}
