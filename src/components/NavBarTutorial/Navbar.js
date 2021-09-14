import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

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

  return (
    <>
      <nav className='navbar'>

        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>Rüdiger Bayer</Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Start</Link>
          </li>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <Link
              to='/services'
              className='nav-links flex flex-row'
              onClick={closeMobileMenu}
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
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Referenzen
            </Link>
          </li>

          <li className='nav-item'>
            <AnchorLink href='#person' className='nav-links'>
              Person
            </AnchorLink>
          </li>

          <li className='nav-item'>
            <AnchorLink href='#contact' className='nav-links'>
              Kontakt
            </AnchorLink>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default Navbar;
