
import { Logo } from '../Logo/Logo'
import LogoSena from '../../imagenes/LogoSena1.png'
import './Section.css'

export const Section = ({h2}) => {
  return (
    <section className='section-ui'>
    <Logo src={LogoSena} style='img3'/>
    <h2 className='section-text'>{h2}</h2>
    </section>
   

  )
}
