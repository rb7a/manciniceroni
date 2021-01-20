import React from 'react'
import Header from '../components/header'

const myDivider = {
  width: '80px',
  border: '2px solid #f7f7f7',
  position: 'relative',
  bottom: '20px'
}

export default () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='lo-studio'>
          <h2>Contatti</h2>
          <div style={myDivider} />
          <span><strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui natus porro nam saepe quibusdam ipsa nisi odio exercitationem dolore laudantium.</strong>
          </span>
          <p style={{
            marginTop: '40px'
          }}
          >Tel. 349 0887444 – 334 6775287
          </p>

          <p><a href='mailto:info@manciniceronistudiolegale.it'>info@manciniceronistudiolegale.it</a></p>

        </div>
        <div>
          <div>
            <h3>Ancona</h3>
            <p>Via Alcide De Gasperi 82, 60125</p>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.9697678037182!2d13.507470515302106!3d43.60717107912294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132d7f907aa79ad3%3A0x30dcbba1e2cb19cb!2sVia%20Alcide%20de%20Gasperi%2C%2082%2C%2060125%20Ancona%20AN%2C%20Italy!5e0!3m2!1sen!2ses!4v1611057132380!5m2!1sen!2ses' width='100%' height='400px' frameborder='0' allowfullscreen='' aria-hidden='false' tabindex='0' />
          </div>
          <div>
            <h3>Ancona</h3>
            <p>Via Alcide De Gasperi 82, 60125</p>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.9697678037182!2d13.507470515302106!3d43.60717107912294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132d7f907aa79ad3%3A0x30dcbba1e2cb19cb!2sVia%20Alcide%20de%20Gasperi%2C%2082%2C%2060125%20Ancona%20AN%2C%20Italy!5e0!3m2!1sen!2ses!4v1611057132380!5m2!1sen!2ses' width='100%' height='400px' frameborder='0' allowfullscreen='' aria-hidden='false' tabindex='0' />
          </div>
        </div>
      </div>

      <style jsx='true'>{`
      .lo-studio p, 
          .lo-studio li {
              color: var(--grey)
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
