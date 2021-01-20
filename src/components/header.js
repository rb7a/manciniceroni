import React from "react"
import { Link } from "gatsby"

class Header extends React.Component {
  state = {
    visible: false,
  }

  showMobileMenu = () => {
    this.setState(prevState => {
      return { visible: !prevState.visible }
    })
  }

  render() {
    return (
      <header>
        <section className="mobile-nav">
          <Link to="/">
            {" "}
            {/* <img src={logo} alt="logo-veggie-cheese" width="240px" /> */}
          </Link>
          {this.state.visible ? (
            <div onClick={this.showMobileMenu} className="burger-icon-close">
              <span>X</span>
            </div>
          ) : (
            <div onClick={this.showMobileMenu} className="burger-icon-open">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </section>

        {this.state.visible ? (
          <nav className="mobile-menu">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/lo-studio">LO STUDIO</Link>
              </li>
              <li>
                <Link to="/professionisti">PROFESSIONISTI</Link>
              </li>
              <li>
                <Link to="/aree-di-attivita">AREE DI ATTIVITÀ</Link>
              </li>
              <li>
                <Link to="/news">NEWS</Link>
              </li>
              <li>
                <Link to="/contatti">CONTATTI</Link>
              </li>
            </ul>
          </nav>
        ) : (
          <p></p>
        )}

        <nav className="desktop-menu">
          <Link to="/">
            logo
          </Link>
          <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/lo-studio">LO STUDIO</Link>
              </li>
              <li>
                <Link to="/professionisti">PROFESSIONISTI</Link>
              </li>
              <li>
                <Link to="/aree-di-attivita">AREE DI ATTIVITÀ</Link>
              </li>
              <li>
                <Link to="/news">NEWS</Link>
              </li>
              <li>
                <Link to="/contatti">CONTATTI</Link>
              </li>
            </ul>
        </nav>

        <style jsx="true">{`
          .mobile-nav {
            display: flex;
            justify-content: space-between;
            padding: 20px;
          }
          .mobile-menu li {
            list-style: none
          }

          .desktop-menu {
            display: none;
          }

          header a {
            color: #5e5e5e;
          }
          header a:hover {
            color: #052B60 !important;
          }
          .burger-icon-close span {
            font-size: 26px;
            color: #777;
            position: relative;
            top: 50px;
            right: 20px;
          }
          .burger-icon-open {
            position: relative;
            top: 55px;
            right: 10px;
          }

          .burger-icon-open span {
            width: 30px;
            border: 1px solid #777;
            margin: 5px;
            display: block;
          }
          .mobile-menu li {
            margin: 10px;
          }
          @media (min-width: 1200px) {
            .mobile-nav {
              display: none;
            }
            .mobile-menu {
              display: none;
            }
            .logo{
              position: relative;
              bottom: 10px
            }
            .desktop-menu {
              display: flex;
              justify-content: space-around;
              height: 100px
            }
            .desktop-menu li {
            list-style: none
          }
            .desktop-menu ul {
              display: flex;
              position: relative;
              
            }
            .desktop-menu ul li {
              margin: 20px;
            }
            .desktop-menu ul li:hover {
              border-bottom: 2px solid #052B60;
    
            }
          }
        `}</style>
      </header>
    )
  }
}

export default Header