import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text5xl text-3xl font-black mb-14">
                Startseite
            </h1>
            <Link className="py-6 px-10 bg-blue-600 rounded-xl text-3xl hover:bg-blue-400 transistion
            duration-300 ease-in-out flex items-center animate-bounce" to='/'>
                Toller Button
                <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
            </Link>
        </div>
    )
}


