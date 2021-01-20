import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import Hero from '../components/hero'
import AboutHome from '../components/aboutHome'
import ContactCta from '../components/contactCta'
import Divider from '../components/divider'
import { Helmet } from 'react-helmet'
import icon1 from '../images/crediti-bancari-icon.png'
import icon2 from '../images/crediti-commerciali-icon .png'

const IndexPage = () => (
  <Layout>

    <Helmet>
      <title>MANCINICERIONI</title>
    </Helmet>
    <Hero />

    <AboutHome />
    <div className='services'>
      <h2>Aree Di Attività</h2>
      <Divider />
      <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nisi officia odit, dolore architecto rem explicabo molestiae at accusamus dolor repudianda.</p>
      <div className='single-service-container'>
        <div className='single-service'>
          <img src={icon1} style={{ display: 'block', margin: '0 auto' }} />
          <p><strong>GESTIONE E RECUPERO CREDITI BANCARI</strong></p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit tur adipisicing elit icing elit tur adipi.</p>
          <p><Link to='/aree-di-attivita/#crediti-bancari'>> Scopri di più</Link></p>
        </div>
        <div className='single-service'>
          <img src={icon2} style={{ display: 'block', margin: '0 auto' }} />
          <p><strong>GESTIONE E RECUPERO CREDITI COMMERCIALI</strong></p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit tur adipisicing elit icing elit tur adipi.</p>
          <p><Link to='/aree-di-attivita/#crediti-commerciali'>> Scopri di più</Link></p>
        </div>
      </div>
    </div>

    <ContactCta />
    <style jsx='true'>{`

    .services {
      position: relative;
      bottom: 60px;
      margin: 0 10px
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
        
        }
        .single-service a {
          display: block;
          margin: 0 auto
        }
        
        .single-service-container {
          margin-top: 60px
        }
      @media(min-width: 960px){
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
          padding: 20px 40px 60px
        }
      }
   
      `}
    </style>

  </Layout>
)

export default IndexPage
