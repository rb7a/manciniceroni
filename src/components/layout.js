import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Footer from './footer'

import CookieConsent from 'react-cookie-consent'

import Header from './header'
import './layout.css'

const policyStyle = {
  color: '#fff !important'
}
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
      <CookieConsent
        location='bottom'
        buttonText='Ok!'
        cookieName='myAwesomeCookieName2'
        style={{ background: '#f7f7f7', color: '#222' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
      >
      Questo sito utilizza i cookie per migliorare l'esperienza dell'utente.  {' '}
        <Link className='policy-link' to='/policy'><span style={{ color: '#222', fontSize: '15px' }}>Policy</span>Policy</Link>
      </CookieConsent>
      <style jsx='true'>{`
  .policy-link{
    color: #fff !important;
    position: relative;
    left: 20px;
    font-size: 14px
  }
  `}
      </style>
    </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
