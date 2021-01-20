import React from 'react'
// import Button from './button'
import { Link } from 'gatsby'

const Hero = () => (
  <section className='hero'>
    <div className='hero-wrapper'>
      <span>GESTIONE E RECUPERO CREDITI</span>
      <h1>
        MANCINICERONI
      </h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, reiciendis.</p>
      <div className='cta'>
        {/* <Button link='/contatti' linkName='CONTATTI' /> */}
        <Link to='/professionisti'><p className='cta-text'>> Chi siamo</p></Link>
      </div>
    </div>
    <style jsx='true'>
      {`
        .hero {
          text-align: center;
          height: 80vh;
          display: flex;
          justify-content: center;
        }
        .hero-wrapper{
          margin-top: 80px
        }
        .hero h1 {
          text-transform: uppercase;
          padding: 0;
          margin: 0;
          font-size: 46px;
          color: #222;
        }
        .hero span {
          color: var(--grey);
          position: relative;
          top: 8px
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
       
        @media (min-width: 1200px) {
          .hero h1 {
            font-size: 58px;
          }
          span {
            font-size: 18px;
            letter-spacing: 0.5px
          }
          .cta {
            display: flex;
            justify-content: space-evenly;
            width: 50%;
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
