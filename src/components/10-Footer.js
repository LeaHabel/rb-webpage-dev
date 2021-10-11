import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../images/logo_white.svg'


export default function Footer() {
    return (
        <>
            <div className="footer-BG">
                <div className="footer-container">
                    <div className="footer-logo-middle">
                        <img src={Logo} className="w-16" />
                        <p className="footer-logo-title">Rüdiger Bayer <br /><span className="footer-logo-subtitle">EDV Schulung</span> </p>
                    </div>
                    <div className="footer-row ">
                        <div>
                            <Link to='/disclaimer' >
                                <p className="footer-link">Disclaimer</p>
                            </Link>
                            <p className="footer-copyright">© 2021 Gestaltet von <a href="http://www.leasulinhabel.com">Lea Su-Lin Habel</a></p>
                        </div>
                        <Link to='/impressum'>
                            <p className="footer-link">Impressum</p>
                        </Link>

                    </div>
                </div>
            </div>



            {/*
//Vorlage-Beispiel für Hover Effekt
            <div id="page-wrap">

                <div id="all">

                    <ul>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                    </ul>

                    <ul>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                    </ul>

                    <ul>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                        <li><a href="#">---</a></li>
                    </ul>

                </div>

            </div>
            */}

        </>
    );

}