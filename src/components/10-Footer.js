import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <>
            <div className="h-48 bg-blue700 text-white p-8">
                <div className="flex flex-row justify-around ">
                    <div>
                        <Link to='/disclaimer' >
                            <p className="opacity-70 font-light">Disclaimer</p>
                        </Link>
                        <p className="my-2 mt-6 opacity-90 text-sm absolute ">© 2021 Gestaltet von <a href="http://www.leasulinhabel.com">Lea Su-Lin Habel</a></p>
                    </div>
                    <Link to='/impressum'>
                        <p className="opacity-70 font-light">Impressum</p>
                    </Link>
                </div>
            </div>



            {/*
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