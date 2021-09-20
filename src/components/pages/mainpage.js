import React from 'react'

import Start from '../01-Start';
import Values from '../02-Values';
import Service from '../03-Service';
import References from '../04-References.js';
import Person from '../05-Person.js';

import AnchorLink from 'react-anchor-link-smooth-scroll'


export default function MainPage() {
    return (
        <>
            <Start />
            <Service />
            <section id='references'>
                <References />
            </section>
            <section id='person'>
                <Person />
            </section>

        </>
    )
}
