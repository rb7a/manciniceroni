require('typeface-poppins')
  // in gatsby-browser.js
export function shouldUpdateScroll(prevRouterProps, { location }) {
    console.log(prevRouterProps.pathname);
    if(prevRouterProps.pathname!=='/aree-di-attivita/')
    {
    window.scrollTo(0, 0)
    const body = document.getElementsByTagName('body')[0]
    body.scrollTop = 0
    return false
    }
  }