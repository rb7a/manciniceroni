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
      image: file(relativePath: { eq: "nicola-mancini.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "elisabetta-ceroni.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 1900) {
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
        <div className='container' id='professionisti'>
          <div className='lo-studio'>
            <h2>Professionisti</h2>
            <div style={myDivider} />
            <span><strong>A supporto del Cliente con entusiasmo e dedizione.</strong></span>
            <div className='professionisti-container'>
              <div className='professionista'>
                <div
                  className='img-container' id='img-container-1'
                >
                  <Img fluid={data.image.childImageSharp.fluid} />
                </div>
                <div>
                  <h3>Avv. Nicola Mancini</h3>
                  <p><strong>Formazione:</strong></p>
                  <ul>
                    <li>Laurea in Giurisprudenza presso l’Università “Alma Mater Studiorum” di Bologna;
                    </li>
                    <li>Master di secondo livello in Diritto Privato Europeo presso l’Università “La Sapienza” di Roma;
                    </li>
                    <li>Abilitazione all’esercizio della professione forense ed iscrizione all’Albo degli Avvocati di Ancona;
                    </li>
                    <li>Master di specializzazione in contenzioso bancario e finanziario.</li>
                  </ul>
                  <p><strong>Esperienze:</strong>
                  </p>
                  <p>Ha collaborato con primari Studi Legali, banche e Società specializzate in recupero crediti, prestando consulenza per la gestione ed il recupero di crediti di derivazione commerciale e bancaria. </p>
                  <p>Ha fornito consulenza in qualità di gestore/asset manager e legale interno in favore di: </p>
                  <ul>
                    <li>Juliet S.p.A. (gruppo Cerved S.p.A.); </li>
                    <li>FBS S.p.A. (gruppo Banca IFIS S.p.A.); </li>
                    <li>La Scala Società Tra Avvocati Per Azioni; </li>
                    <li>Studio legale internazionale Bacciardi and Partners. </li>
                  </ul>
                  <p><strong>Contatti</strong></p>
                  <p>Tel: 349 0887444</p>
                  <p>Email: <a href='mailto:nicola@manciniceronistudiolegale.it '>nicola@manciniceronistudiolegale.it </a></p>
                  <p>Linkedin: <a href='https://www.linkedin.com/in/avvocatonicolamancini/' target='_blank'>Nicola Mancini</a></p>
                </div>
              </div>
              <div
                className='professionista'

              >

                <div>
                  <h3>Avv. Elisabetta Ceroni</h3>
                  <p><strong>Formazione:</strong></p>
                  <ul>
                    <li>Laurea in Giurisprudenza presso l’Università “Luiss Guido Carli” di Roma;
                    </li>
                    <li>Abilitazione all’esercizio della professione forense ed iscrizione all’Albo degli Avvocati di Fermo;
                    </li>
                    <li>Scuola di specializzazione in diritto civile presso l’Università di Camerino.
                    </li>
                  </ul>
                  <p><strong>Esperienze:</strong>
                  </p>
                  <p>Ha collaborato con primari Studi Legali e Società specializzate in recupero crediti, prestando consulenza per la gestione ed il recupero di crediti di derivazione commerciale ed utilities. </p>
                  <p>Ha fornito consulenza in qualità di legale interno in favore di:  </p>
                  <ul>
                    <li>Euro Service S.p.A.;
                    </li>
                    <li>Studio legale Natali Mei; </li>
                    <li>Studio legale internazionale Bacciardi and Partners;
                    </li>
                    <li>Studio legale Emiliani & Associati.
                    </li>
                  </ul>
                  <p>Professionista Delegata alle vendite nelle procedure esecutive immobiliari presso il Tribunale di Fermo.</p>
                  <p>Docente di Diritto ed Economia presso le Scuole secondarie Superiori.
                  </p>
                  <p><strong>Contatti</strong></p>
                  <p>Tel: 334 6775287</p>
                  <p>Email: <a href='mailto: elisabetta@manciniceronistudiolegale.it   '> elisabetta@manciniceronistudiolegale.it   </a></p>
                  <p>Linkedin: <a href='https://www.linkedin.com/in/elisabetta-ceroni/' target='_blank'>Elisabetta Mancini</a></p>
                </div>
                <div
                  className='img-container' id='img-container-2'
                >
                  <Img fluid={data.image2.childImageSharp.fluid} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Newsletter />
      </Layout>
      <style jsx='true'>{`
          .lo-studio p, 
          .lo-studio li {
              color: var(--grey)
          }
          .professionista h3 {
            color: var(--main-color)
          }
          #img-container-1 {
            margin-top: 40px;
          }
          @media(min-width:968px){
            .lo-studio{
              margin-top: 60px ;
              width: 100%;
              margin: 0 auto
            }
            .img-container {
               width: 100%;
            }
            #img-container-1 {
              margin-right: 40px;
              margin-top: 0
            }
            #img-container-2 {
              margin-left: 40px
            }
            .professionista {
              display: flex;
              justify-content: space-between;
              margin-top: 100px
            }
            #professionisti {
              margin-top: 140px
            }
          }
      `}
      </style>
    </div>
  )
}
