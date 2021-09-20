import React, { useState } from 'react';
import { TopicHeadline } from './design-components/TopicHeadline';
import { TextContainer } from './design-components/TextContainer';
import emailjs from "emailjs-com";

export default function Contact() {

    const [emailSuccess, setEmailSuccess] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
        console.log("sendingemail")

        emailjs.sendForm('test-email-js', 'template_rloezvr', e.target, 'user_9qfg9cuubzWR4SJbSQdOw')
            .then((result) => {
                console.log(result.text);
                setEmailSuccess(true);
            }, (error) => {
                console.log(error.text);
                setEmailSuccess(false);
            });
        //e.target.reset(); //if form gets submitted it will reset the fields of the form again
    }

    return (
        <>
            <TopicHeadline headline="Kontakt" textColor="text-darkblue1" />

            <div className="contact-page">

                <div className="card-content text-darkblue1">
                    <hr className="hairline-card border-blue700 " />

                    <div className="flex flex-row">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                        <p>+49123456789</p>
                    </div>

                    <div className="flex flex-row">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <p>edvschulung@ruediger-bayer</p>
                    </div>

                    <div className="flex flex-row">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <p>Kleinwaldstraße 20<br></br>76327 Pfinztal</p>
                    </div>
                </div>


                <form
                    class="w-full max-w-lg"
                    onSubmit={sendEmail}>
                    <TextContainer
                        component="contact"
                        subtitle="Haben Sie Fragen?"
                        content="Ich freue mich auf Ihre Nachricht. "
                    />

                    <div class="flex flex-wrap -mx-3 mb-6 pt-12">

                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Name
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-first-name"
                                type="text"
                                placeholder=""
                                name="name" //for EMailJS
                            />
                        </div>

                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Firma
                                <span class="text-grey-600 capitalize font-light text-xs italic pl-2">(Optional)</span>
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                placeholder=""
                                name="company"
                            />
                        </div>

                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                E-Mail
                            </label>
                            <input
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="email"
                                type="email"
                                name="email"
                            />
                        </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Nachricht
                            </label>
                            <textarea
                                class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                                id="message"
                                name="message"
                            >
                            </textarea>
                        </div>
                    </div>

                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3">
                            <button
                                class="shadow bg-buttonColorBrightBG hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 uppercase block"
                                type="submit">
                                Senden
                            </button>
                            <p className={emailSuccess ? 'block' : 'hidden'}>Erfolgreich versendet</p>
                        </div>
                        <div class="md:w-2/3"></div>
                    </div>

                </form>
            </div>
        </>
    );

}