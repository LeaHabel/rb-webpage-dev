import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { TopicHeadline } from "./design-components/TopicHeadline";

export default function Impressum() {
    return (
        <>
            <div className="mt-24">
                <TopicHeadline headline="Impressum" />
            </div>

            <section id='impressum' className="sm:mx-8 md:mx-16 lg:mx-28 mx-8 my-16">


                <h3>Angaben gemäß 5 TMG</h3>
                <p>Rüdiger Bayer
                    <br />
                    EDV-Schulung Rüdiger Bayer
                    <br />
                    Kleinwaldstraße 20
                    <br />
                    76327 Pfinztal
                </p>
                <br />

                <h3>Kontakt</h3>
                <p>Telefon: +491727204807
                    <br />
                    E-Mail: EDVschulung@Ruediger-Bayer.de</p>
                <br />

                <h3>Berufsbezeichnung und berufsrechtliche Regelungen</h3>
                <p>Berufsbezeichnung: anderer Beruf
                    <br />
                    Zuständige Kammer:
                    <br />
                    Verliehen in:
                </p>
                <p>Es gelten folgende berufsrechtliche Regelungen:</p>
                <br />

                <h3>Verbraucher&shy;streit&shy;beilegung/ Universal&shy;schlichtungs&shy;stelle</h3>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucher&shy;schlichtungs&shy;stelle teilzunehmen.</p>
                <br />

                <p className="text-xs text-gray-500">Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>

            </section>



        </>
    )
}
