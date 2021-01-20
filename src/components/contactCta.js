import React from 'react'
import { Link } from 'gatsby'

const contactCta = () => (
  <section className='contact-cta'>
    <div>
      <h2>Lorem ipsum?</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit obcaecati at distinctio.</p>
    </div>
    <div>
      <Link style={{ textAlign: 'center' }} className='btn btn-cta' to='/contatti'>CONTATTI</Link>
    </div>
    <style jsx='true'>
      {`
      .contact-cta{
        background-color: var(--main-color);
        color: #fff;
        text-align: center;
        padding: 60px 4% 120px;
        position: relative;
        top:60px
      }
      
      .contact-cta p {
        color: #fff;
        margin-bottom: 40px
      }
      .btn-cta{
          border: 1px solid #fff;
          color: #fff !important;
          font-weight: 600;
          padding: 10px 30px;
          border-radius: 4px;
        }
        .btn-cta:hover{
          border: 1px solid #fff;
          background-color: #fff !important;
          color: var(--main-color) !important
        }
        .contact-cta p {
        font-weight: 300
        }
   
    @media(min-width: 1200px){
      .contact-cta{
        display:flex;
        justify-content: space-evenly;
        text-align: left;
        padding: 40px 4% 60px;
    

      }
      .contact-cta h2{
           font-size: 32px
        }
        .btn-cta{
          position: relative;
          top: 60px
        }
        .contact-cta p {
          position: relative;
          bottom: 10px;
        }
    }
      `}
    </style>
  </section>

)

export default contactCta
