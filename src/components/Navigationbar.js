import React from 'react';
import { Link } from 'react-router-dom';

{/* passing in "toggle"*/ }
const Navigationbar = ({ toggle }) => {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm" role="navigation">
            <Link to='/' className='pl-8'>
                Rüdiger Bayer
            </Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                {/* menu button */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4" to="/">Startseite</Link>
                <Link className="p-4" to="/service">Leistungen</Link>
                <Link className="p-4" to="/person">Person</Link>
                <Link className="p-4" to="/contact">Kontakt</Link>
            </div>
        </nav>
    )
}

export default Navigationbar
