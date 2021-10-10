import React, { useState } from 'react';
//import { Link, Route } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import LogoSVG from '../../images/logo.svg';
import LogoSVGwhite from '../../images/logo_white.svg';
import { HashLink as Link } from 'react-router-hash-link';
import { AnchorLink } from 'react-anchor-link-smooth-scroll';


{/* https://github.com/rafgraph/react-router-hash-link */ }

function Navbar() {
  const [navMenuActive, setNavMenuActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [navBarInit, setNavBarInit] = useState(true);

  const handleClick = () => setNavMenuActive(!navMenuActive);
  const closeMobileMenu = () => setNavMenuActive(false);


  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavBarInit(false);
    } else {
      setNavBarInit(true);
    }
  }

  window.addEventListener('scroll', changeBackground)

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  const changeNavMenuStyle = (navBarInit, navMenuActive) => {
    if (navBarInit && navMenuActive) { /* initial, blue navbar and expanded */
      return 'nav-menu nav-menu-init active';
    } else if (navBarInit && !navMenuActive) { /* initial, blue navbar not expanded */
      return 'nav-menu';
    } else if (!navBarInit && navMenuActive) { /* normal, white navbar and expanded */
      return 'nav-menu active'
    } else if (!navBarInit && !navMenuActive) { /*normal, white navbar and not expanded */
      return 'nav-menu';
    }
  }


  return (
    <>
      <nav className={navBarInit ? 'navbar navbar-init' : 'navbar navbar-normal'}>

        <Link
          to='/#home'
          className='navbar-logo'
          smooth
          onClick={closeMobileMenu}
          scroll={el => scrollWithOffset(el)}
        >
          <img src={navBarInit ? LogoSVGwhite : LogoSVG} className="w-16"></img>
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <svg className={navBarInit ? 'w-6 h-6 text-white' : 'w-6 h-6 text-black'} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        <ul className={changeNavMenuStyle(navBarInit, navMenuActive)}>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Link
              to={{
                pathname: "/",
                hash: "#service",
                //search: "?sort=name",
                //state: { fromDashboard: true },

              }}
              // to='/home#service'
              className={navBarInit ? 'nav-links-init flex flex-row' : 'nav-links flex flex-row'}
              smooth
              onClick={closeMobileMenu}
              scroll={el => scrollWithOffset(el)}
            >
              Leistungen
              <svg class="w-4 h-4 self-center ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"></path>
              </svg>
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className='nav-item'>
            <Link
              to={{
                pathname: "/",
                hash: "#references",
              }}
              className={navBarInit ? 'nav-links-init' : 'nav-links'}
              smooth
              onClick={closeMobileMenu}
              scroll={el => scrollWithOffset(el)}
            >
              Referenzen
            </Link>


          </li>

          <li className='nav-item'>
            <Link
              to={{
                pathname: "/",
                hash: "#person",
              }}
              //to='/MainPage#person'
              className={navBarInit ? 'nav-links-init' : 'nav-links'}
              smooth
              onClick={closeMobileMenu}
              scroll={el => scrollWithOffset(el)}
            >
              Über mich
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to={{
                pathname: "/",
                hash: "#contact",
              }}
              smooth
              onClick={closeMobileMenu}
              className={navBarInit ? 'nav-links-init' : 'nav-links'}
              scroll={el => scrollWithOffset(el)}
            >
              Kontakt
            </Link>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default Navbar;
