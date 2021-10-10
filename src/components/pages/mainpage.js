import React from 'react'

import Start from '../01-Start';
import Values from '../02-Values';
import Service from '../03-Service';
import References from '../04-References.js';
import Person from '../05-Person.js';
import Contact from '../06-Contact';

import AnchorLink from 'react-anchor-link-smooth-scroll'


export default function Home() {
    return (
        <>
            <section id='home'>
                <Start />
            </section>
            <Service />
            <section id='references'>
                <References />
            </section>
            <section id='person'>
                <Person />
            </section>
            <section id='contact'>
                <Contact />
            </section>

        </>
    )
}
