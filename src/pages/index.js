import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import Hero from '../components/hero'
import AboutHome from '../components/aboutHome'
import Partners from '../components/partners'
import Newsletter from '../components/newsletter'
import Divider from '../components/divider'
import { Helmet } from 'react-helmet'
import icon1 from '../images/crediti-bancari-icon.png'
import icon2 from '../images/crediti-commerciali-icon .png'

const IndexPage = () => (
  <Layout>

    <Helmet>
      <title>MANCINICERIONI | Gestione E Recupero Crediti</title>
    </Helmet>
    <div id='hero'>
      <Hero />
    </div>
    <AboutHome />
    <div className='services'>
      <h2>Aree Di Attività</h2>
      <Divider />
      <p className='subtitle'>Lo studio si occupa del settore del recupero crediti, distinto in due principali aree di attività.</p>
      <div className='single-service-container'>
        <div className='single-service'>
          <img src={icon1} style={{ display: 'block', margin: '0 auto' }} />
          <p><strong>GESTIONE E RECUPERO CREDITI BANCARI</strong></p>
          <p>Lo Studio fornisce assistenza in favore di piccole e medie imprese, artigiani e professionisti, per la gestione ed il recupero di crediti commerciali.</p>
          <p style={{
            marginTop: '40px'
          }}
          ><Link to='/aree-di-attivita/#crediti-bancari'>> Scopri di più</Link>
          </p>
        </div>
        <div className='single-service'>
          <img src={icon2} style={{ display: 'block', margin: '0 auto' }} />
          <p><strong>GESTIONE E RECUPERO CREDITI COMMERCIALI</strong></p>
          <p>ManciniCeroni fornisce assistenza in favore di banche ed Intermediari Finanziari per la gestione ed il recupero di crediti bancari deteriorati <em>Non Performing Loans (NPL) ed Unlikely to Pay (UTP)</em>.</p>
          <p style={{
            marginTop: '40px'
          }}
          ><Link to='/aree-di-attivita/#crediti-commerciali'>> Scopri di più</Link>
          </p>
        </div>
      </div>
    </div>
    <Partners />
    <Newsletter />
    <style jsx='true'>{`

    .services {
      position: relative;
      bottom: 60px;
      margin: 0 10px
    }
    .services h2 {
      color: var(--main-color)
    }
      .services h2, .services p {
        text-align: center
      }
      .services p {
          color: var(--grey) !important;
         
        }
        .single-service {
          box-shadow: var(--shadow);
          padding: 20px 20px 40px;
          margin-bottom: 20px;
          border-radius: 35px;
          max-width: 500px;
          margin: 20px auto
        
        }
        .single-service a {
          display: block;
          margin: 0 auto
        }
        
        .single-service-container {
          margin-top: 60px
        }
        
      @media(min-width: 960px){

        #hero {
          position: relative;
          top: 40px
        }
        .services {
          margin-top: 140px
        }
        .subtitle{
          max-width: 60%;
          margin: 0 auto
        }
        .single-service-container {
          display: flex;
          justify-content: center;
        }
        .single-service{
          margin: 10px 40px;
          padding: 30px 40px 50px
        }
      }
   
      `}
    </style>

  </Layout>
)

export default IndexPage
