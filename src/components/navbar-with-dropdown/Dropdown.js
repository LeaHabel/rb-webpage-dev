import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

import { MenuItems } from './MenuItems';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const changeDropdownStyle = (click, navBarInit) => {
    //Folgt noch
  }

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              > {/* src={navBarInit ? item.image-init : item.image } -> zeige verschdn svgs je nach HG-Farbe */}
                {/* <img src={item.image} class="fill-current text-red-500 h-8 w-8 relative z-100 " viewBox="0 0 60 60"> 
              </img>*/}
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
