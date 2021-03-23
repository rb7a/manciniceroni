import React, { useEffect } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import Img from 'gatsby-image'

const myDivider = {
  width: '80px',
  border: '2px solid #f7f7f7',
  position: 'relative',
  bottom: '20px'
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "mancini-ceroni-lo-studio.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1900, maxHeight: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => window.scrollTo(0, 800), [])

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
            <h2>Lo Studio</h2>
            <div style={myDivider} />
            <span><strong>Professionisti del recupero crediti, con l’obiettivo del rapido raggiungimento del risultato. Spirito di ascolto e comprensione, competenza e perseveranza.</strong>
            </span>
            <p style={{
              marginTop: '40px'
            }}
            >Lo Studio Legale ManciniCeroni si occupa in via esclusiva di recupero crediti e svolge la propria attività in favore di piccole e medie imprese, artigiani, professionisti, banche e Intermediari Finanziari.
            </p>
            <p>Lo Studio è specializzato nella gestione e nel recupero di crediti commerciali e bancari e fornisce un servizio di eccellenza, basato sulla qualità, sulla rapidità e sul raggiungimento dei risultati.</p>
            <p>ManciniCeroni adotta un preciso metodo acquisito attraverso una consolidata esperienza maturata negli anni attraverso la collaborazione con primari Studi legali del settore e Società di recupero crediti.</p>
            <p>Lo Studio in particolare presta servizi su misura, indentificati come “servizi di artigianato legale innovativo”, che consentono al Cliente di:</p>
            <ul>
              <li>Gestire e recuperare i propri crediti rapidamente.
              </li>
              <li>Evitare costi e spese in mancanza di un effettivo recupero.
              </li>
              <li>Ottenere la tutela e la valorizzazione dei propri crediti.
              </li>
            </ul>
            <p style={{
              marginBottom: '40px'
            }}
            >L’approccio dello Studio si differenzia all’interno dell’attuale panorama legale, per il rapporto di fiducia, trasparenza e collaborazione che viene instaurato con il Cliente, fondato sull’ascolto e sulla comprensione e finalizzato al rapido raggiungimento dei risultati,  attraverso un servizio di qualità che ha come fondamenta i valori della gentilezza, della dignità e dell’umanità, che contraddistinguono la filosofia dello Studio Mancini Ceroni.
            </p>
          </div>
        </div>
        <Newsletter />
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
