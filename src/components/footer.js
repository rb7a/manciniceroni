import React from 'react'
import Subfooter from '../components/subfooter'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-info-main-container'>
        <div className='footer-info-container'>
          <h4>Forlì-Cesena</h4>
          <p className='footer-info'>Via Don Ercole Fiori, 9,
47042 Cesenatico (FC)
          </p>
          {/* <p className='footer-info'>+39  349 0887444</p>
          <p className='footer-info'>info@manciniceronistudiolegale.it</p> */}

        </div>
        <div className='footer-info-container'>
          <h4>Ancona</h4>
          <p className='footer-info'>Via Alcide De Gasperi, 82, 60125 Ancona (AN)
          </p>
          {/* <p className='footer-info'>+39  349 0887444	</p>
          <p className='footer-info'>info@manciniceronistudiolegale.it</p> */}

        </div>
        <div className='footer-info-container'>
          <h4>Fermo</h4>
          <p className='footer-info'>Via Campogrande, 21, 63831 Rapagnano (FM)
          </p>
          {/* <p className='footer-info'>+39  349 0887444	</p>
          <p className='footer-info'>info@manciniceronistudiolegale.it</p> */}

        </div>
      </div>
      <div className='contact'>
        <p><strong>Contatti</strong></p>
        <p className='footer-info'><a href='+39  349 0887444'>+39  349 0887444</a></p>
        <p className='footer-info'><a href='mailto:info@manciniceronistudiolegale.it'>info@manciniceronistudiolegale.it</a></p>
      </div>

      <style jsx='true'>{`
         .footer {
             display:block;
             margin: 60px 0px 0px;
             background-color: #fafafa;
             padding: 40px 10px 0;     
         }
        .footer-info-main-container {
            margin-top: 60px
        }
        .footer-info-container {
            margin-top: 40px
        }
        .footer-info {
            color: var(--grey);
            max-width: 70%;
            margin: 0 auto
            
        }
      
        .footer-info a:hover {
            color: var(--main-color)
        }

        .contact {
          margin-top: 60px
        }
        .footer-info-container h4, .contact strong {
          position: relative;
          left: 50px;
          top: 10px
        }
    
    @media(min-width: 968px){

     
        .footer-info-main-container {
             display: flex;
             justify-content: space-evenly;
             margin-top: 0px;
             position: relative;
             bottom: 40px;
         }
         .footer-logo img {
             margin: 0 auto;
             display: block
         }
         .contact {
          text-align: center;
          margin-top: 0;
          position: relative;
          bottom: 10px
        }
        .contact strong {
          left: 0
        }
    }
         
         `}
      </style>
      <Subfooter />
    </div>
  )
}

export default Footer
