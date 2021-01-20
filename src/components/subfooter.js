import React from 'react'

const Subfooter = () => (
  <section className='subfooter'>
    <a href='https://www.vanillamarketing.it/'> © {new Date().getFullYear()} | Website created by Vanilla Marketing</a>
    <style jsx='true'>{`
               .subfooter{
                   text-align: center;
                   padding: 10px;
                   margin-top: 150px
               }
               .subfooter a{
                   color: #777;
                   font-size: 14px;
                   position: relative;
                   bottom: 20px
               }
               @media(min-width: 968px){
                .subfooter{
                   
                   margin-top: 60px
               }
               }
               `}
    </style>
  </section>

)

export default Subfooter
