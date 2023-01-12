import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ContactCta from '../components/contactCta'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import icon2 from '../images/crediti-commerciali-icon .png'

const myDivider = {
  width: '80px',
  border: '2px solid #f7f7f7',
  position: 'relative',
  bottom: '20px'
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "crediti-bancari.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1900, maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <div style={{
          position: 'relative',
          bottom: '20px'
        }}
        >
          <Img fluid={data.image.childImageSharp.fluid} />
        </div>
        <div className='container'>
          <div className='lo-studio'>
            <img
              style={{
                display: 'block',
                marginTop: '60px',
                width: '64px',
                position: 'relative',
                top: '20px'
              }} src={icon2}
            />
            <h2>Gestione e Recupero Crediti Bancari</h2>
            <div style={myDivider} />

            <p>ManciniCeroni fornisce assistenza in favore di banche ed Intermediari Finanziari per la gestione ed il recupero di crediti bancari deteriorati <em>Non Performing Loans (NPL) ed Unlikely to Pay (UTP).</em></p>
            <p>I Professionisti dello Studio hanno acquisito nel corso degli anni un elevato grado di competenza e specializzazione collaborando con primari Studi legali e Società di recupero crediti, in qualità di gestori/asset manager nonché di legali interni. </p>
            <p>Lo Studio è quindi in grado di fornire autonoma assistenza nella gestione accurata e profittevole di portafogli di pratiche
              <em>NPL/UTP secured e unsecured di small, mid e large ticket</em>,
              per l’intera filiera della gestione del credito:
            </p>
            <ul>
              <li>Analisi delle pratiche affidate e pianificazione della migliore strategia di recupero
              </li>
              <li>Attività stragiudiziale, finalizzata alla definizione transattiva
              </li>
              <li>Attività giudiziale, esecutiva e concorsuale, finalizzata al recupero coattivo ed alla valorizzazione del credito

              </li>
              <li>Attività giudiziale di tutela del credito nelle cause passive</li>
              <li>costante aggiornamento, anche attraverso la conoscenza professionale dei principali portali gestionali utilizzati da banche e Società di recupero crediti: EPC, REC, SYGES, LAWEB, EASYLEX, WELLDONE.
              </li>
            </ul>
            <p style={{
              marginBottom: '40px'
            }}
            >Lo Studio fornisce altresì la propria collaborazione ed assistenza per attività di <em>Due Diligence</em>, valutazione/analisi dei portafogli, <em>Data Remediation e Business Plan</em>, garantendo qualità e rispetto della tempistica di definizione della lavorazione richiesta dal Cliente.
            </p>
          </div>
        </div>
        <ContactCta />
      </Layout>
      <style jsx='true'>{`
          
          .lo-studio p, 
          .lo-studio li {
              color: var(--grey)
          }
          .lo-studio h2 {
            color: var(--main-color)
          }
          @media(min-width:968px){
            .lo-studio{
              margin-top: 60px ;
              width: 80%;
              margin: 0 auto
            }
          }
        
          `}
      </style>
    </div>
  )
}
