import React from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown'

export default function NavBurgerDropdown({ isOpen, toggle }) {
    console.log(isOpen);
    return (
        <div className={isOpen ?
            'grid grid-rows-4- text-center items-center bg-blue-700 text-white' : 'hidden'}
            onClick={toggle}>
            <Link className="p-4" to="/">
                <NavDropdown />
            </Link>
            <Link className="p-4" to="/">
                Home
            </Link>
            <Link className="p-4" to="/service">
                Leistungen
            </Link>
            <Link className="p-4" to="/person">
                Person
            </Link>
            <Link className="p-4" to="/contact">
                Kontact
            </Link>

        </div>
    )
}
