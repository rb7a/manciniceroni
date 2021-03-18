import React from 'react'
import Button from './button'
import { Link } from 'gatsby'

const Hero = () => (
  <section className='hero'>
    <div className='hero-wrapper'>
      <span>GESTIONE E RECUPERO CREDITI</span>
      <h1>
        MANCINICERONI
      </h1>
      <p>Spirito di ascolto comprensione, competenza e perseveranza.</p>
      <div className='cta'>
        <Button link='/contatti' linkName='CONTATTI' />
        <Link to='/professionisti'><p className='cta-text'>> Professionisti</p></Link>
      </div>
    </div>
    <style jsx='true'>
      {`
        .hero {
          text-align: center;
          height: 80vh;
          display: flex;
          justify-content: center;
          margin: 0 20px
        }
        .hero-wrapper{
          margin-top: 80px
        }
        .hero h1 {
          text-transform: uppercase;
          padding: 0;
          margin: 0;
          font-size: 34px;
          color: --var(--dark)
        }
        .hero span {
          color: var(--grey);
          
        }
        .hero p {
          position: relative;
          bottom: 10px;
          color: var(--grey);
          padding: 0 15px;
        }
        .cta-text {
            margin-top: 40px;  
          }
        .cta-text:hover {
            color: var(--main-color)  
          }
       
        @media (min-width: 1200px) {

          .hero {
            height: 80vh;
            margin-top: 80px
          }
          .hero h1 {
            font-size: 58px;
          }
          span {
            font-size: 18px;
            letter-spacing: 0.5px;
            position: relative;
            top: 8px
          }
          .cta {
            display: flex;
            justify-content: space-evenly;
            width: 60%;
            margin: 0 auto
          }
         
          .cta-text {
            position: relative; 
            bottom: 22px !important
          }
        }
      `}
    </style>
  </section>

)

export default Hero
