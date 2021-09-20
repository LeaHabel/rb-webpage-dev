import React, { useState } from 'react';
//import { Link, Route } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import LogoSVG from '../../images/logo.svg';
import { HashLink as Link } from 'react-router-hash-link';
import { AnchorLink } from 'react-anchor-link-smooth-scroll';


{/* https://github.com/rafgraph/react-router-hash-link */ }

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }

  window.addEventListener('scroll', changeBackground)

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  return (
    <>
      <nav className={navBar ? 'navbar active' : 'navbar'}>

        <Link to='/MainPage' className='navbar-logo' onClick={closeMobileMenu}>
          <img class='logo-non-active' className="w-16"></img>
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
          <svg className={navBar ? 'w-6 h-6' : 'w-6 h-6 text-white'} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Link
              to='MainPage#service'
              className={navBar ? 'nav-links active flex flex-row' : 'nav-links flex flex-row'}
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
              to='/MainPage#references'
              className={navBar ? 'nav-links active' : 'nav-links'}
              smooth
              onClick={closeMobileMenu}
              scroll={el => scrollWithOffset(el)}
            >
              Referenzen
            </Link>


          </li>

          <li className='nav-item'>
            <Link
              to='/MainPage#person'
              className={navBar ? 'nav-links active' : 'nav-links'}
              smooth
              scroll={el => scrollWithOffset(el)}
            >
              Person
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/MainPage#contact'
              smooth
              className={navBar ? 'nav-links active' : 'nav-links'}
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
