import React from 'react'
import { Section } from '../../UI/Section/Section'
import { Card } from '../../UI/Card/Card'
import { CardsReferences } from '../../UI/CardsReferences/CardsReferences'
import { Experience } from '../../UI/Experience/Experience'
import './Main.css'

export const Main = () => {
  return (
    <main className='main-page'>
      <Section h2='PERFIL'/>
      <hr />
      <p className='profile-text'>El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta <br />
manera para permitir la presentación de elementos gráficos en documentos, sin <br /> 
necesidad de una copia formal. El uso de Lorem Ipsum permite a los diseñadores reunir <br />
los diseños y la forma del contenido antes de que el contenido se haya creado, dando <br />
al diseño y al proceso de producción más libertad.</p>

<Section h2='PROYECTOS'/>
<hr />
<Card/>
<Card/>
<Card/>
<Card/>
<Section h2='REFERENCIAS'/>
<hr />
<CardsReferences/>
<CardsReferences/>
<CardsReferences/>
<Section h2='EXPERIENCIA'/>
<Experience/>
    </main>
  )
}
