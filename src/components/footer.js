import React from 'react'
import Subfooter from '../components/subfooter'
import phone from '../images/phone.png'
import mail from '../images/mail.png'
import whiteLogo from '../images/logo-bianco.png'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={whiteLogo} id='logo-footer' />
      <div className='footer-info-main-container'>
        <div className='footer-info-container'>
          <h4 className='title-section'>Contatti</h4>
          <p><a href='tel:+39  349 0887444'>+39  349 0887444</a></p>
          <p><a href='tel:+39  334 6775287'>+39  334 6775287</a></p>
          <p><a href='mailto:info@manciniceronistudiolegale.it'>info@manciniceronistudiolegale.it</a></p>

        </div>
        <div className='footer-info-container'>
          <h4>Sedi</h4>
          <p>Ancona</p>
          <p>Fermo</p>
          <p>Forlì-Cesena</p>
        </div>
        <div className='footer-info-container'>
          <h4>Risorse Utili</h4>
          <p><Link to=''>Privacy Policy</Link>
          </p>
          <p><Link to=''>Cookie Policy</Link>
          </p>
          <p><Link to=''>Note Legali</Link>
          </p>

        </div>
      </div>
      <div className='contact'>
        <p><strong>ManciniCeroni Studio Legale</strong></p>
        <p style={{ color: '#999' }}>Avv. Nicola Mancini - P.IVA 02563520416</p>
        <p style={{ color: '#999', position: 'relative', bottom: '10px' }}>Avv. Elisabetta Ceroni - P.IVA 02225960448</p>
      </div>
      <style jsx='true'>{`
         .footer {
             display:block;
             margin: 60px 0px 0px;
             background-color: var(--main-color);
             padding: 40px 10px 0;  
             color: #fff  
         }
         #logo-footer {
           display: block;
           margin: 0 auto 40px
         }

        .footer-info-main-container {
            margin-top: 60px
        }
        .footer-info-container {
            margin-top: 40px;
        }
        .footer-info-container a {
            color: #fff
        }

        .footer-info {
            color: #fff;
            max-width: 70%;
            margin: 0 auto
            
        }
        .contact strong, .contact a {
          color: #fff !important
        }
      
        .footer-info a:hover {
            color: var(--main-color)
        }

        .contact {
          margin-top: 80px;
          border-top: 2px solid #fff:
        }
        .contact strong {
          border-top: 3px solid #fff;
          padding: 20px 40px;      
        }
        .contact div {
          position: relative;
          left: 70px
        }
     
        #icon {
          display: inline-block;
          margin-right: 10px;
          position: relative;
          top: 5px
        }
       
    
    @media(min-width: 968px){
        .footer-info-main-container {
             display: flex;
             justify-content: space-evenly;
             margin-top: 0px;
             position: relative;
             bottom: 40px;
         }
         .footer-info-container {
           position: relative;
           right: 60px
         }
         .footer-logo img {
             margin: 0 auto;
             display: block
         }
         .contact {
          text-align: center;
          margin-top: 0;
          position: relative;
          bottom: 10px;
          margin-top: 40px
        }
       
        .contact strong {
          left: 0
        }
        .contact div {
          left: 0px;
        }
        .contact span {
          top: 0px;
        }
    }
         
         `}
      </style>
      <Subfooter />
    </div>
  )
}

export default Footer
