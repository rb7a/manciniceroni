import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
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
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
    <section id='about-section'>
      <div className='half-section section-left'>
        <Img fluid={data.image.childImageSharp.fluid} />
      </div>
      <div className='half-section section-right'>
        <div id='about-right-container'>
          <h2>Chi Siamo</h2>
          <div style={myDivider} />
          <p>
          ManciniCeroni è uno Studio Legale Boutique, che presta servizi in via esclusiva e specialistica nel settore del recupero crediti, per fornire una consulenza di elevata qualità.

Lo Studio nasce dall’idea degli Avv.ti Nicola Mancini ed Elisabetta Ceroni, con la finalità di offrire al Cliente servizi su misura, indentificati come “servizi di artigianato legale innovativo”, in uno specifico ramo del diritto, quello della gestione e del recupero crediti di derivazione commerciale e bancaria.

Lo Studio ha le proprie sedi nel territorio marchigiano-romagnolo, in Ancona, Fermo e Forlì-Cesena.

          </p>

        </div>
      </div>
      <style jsx='true'>{`
        #about-right-container{
            padding: 80px 20px;
        }
        #about-right-container p {
          color: var(--grey);
          position: relative;
          bottom: 20px
        }
        
        #about-right-container h2 {
          color: var(--main-color)
        }
        #about-right-link{
          font-weight: 500;
          color: var(--grey);
          position: relative;
          top: 20px;
          padding-bottom: 80px;
          display: block
        }
        #about-right-link:hover {
          color: var(--main-color)
        }
        .section-left {
          margin:0 10px;
    
        }
        .section-right {
          position: relative;
          bottom: 40px
        }
      @media (min-width: 1200px) {
        #about-section {
          display: flex;
        }
        #about-right-container {
          margin: 60px 60px;
          padding: 0
        
        }
        .half-section {
          min-width: 50%;
        }
        .section-right {
          
          bottom: 60px
        }
       
        .section-left{
          margin: 0 0 0 40px
        }
        #about-right-link{
            padding-bottom: 0;
            
        }
      }
    `}
      </style>
    </section>
  )
}
