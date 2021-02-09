import React from 'react'
import Subfooter from '../components/subfooter'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-info-main-container'>
        <div className='footer-info-container'>
          <h3>Forlì-Cesena</h3>
          <p className='footer-info'>Via Don Ercole Fiori, 9,
47042 Cesenatico (FC)
          </p>
          <p className='footer-info'>+39  349 0887444</p>
          <p className='footer-info'>info@manciniceronistudiolegale.it</p>

        </div>
        <div className='footer-info-container'>
          <h3>Ancona</h3>
          <p className='footer-info'>Via Alcide De Gasperi, 82, 60125 Ancona (AN)
          </p>
          <p className='footer-info'>+39  349 0887444	</p>
          <p className='footer-info'>info@manciniceronistudiolegale.it</p>

        </div>
        <div className='footer-info-container'>
          <h3>Fermo</h3>
          <p className='footer-info'>Via Campogrande, 21, 63831 Rapagnano (FM)
          </p>
          <p className='footer-info'>+39  349 0887444	</p>
          <p className='footer-info'>info@manciniceronistudiolegale.it</p>

        </div>

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
            
        }
      
        .footer-info a:hover {
            color: var(--main-color)
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
    }
         
         `}
      </style>
      <Subfooter />
    </div>
  )
}

export default Footer
