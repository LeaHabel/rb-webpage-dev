import React from 'react'

import Start from '../components/Start';
import StartYTTut from '../components/StartYTTut';
import Service from '../components/Service';

import References from '../components/References.js';
import Person from '../components/Person.js';


export default function Home() {
    return (
        <>
            <Start />
            <Service />
            <References />
            <Person />

        </>
    )
}
