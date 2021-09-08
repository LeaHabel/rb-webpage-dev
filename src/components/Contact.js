import { TopicHeadline } from './design-components/TopicHeadline'
import { TextContainer } from './design-components/TextContainer';

export default function Contact() {
    return (
        <>
            <TopicHeadline headline="Kontakt" textColor="text-darkblue1" />
            <div className="w-full flex justify-center">
                <form class="w-full max-w-lg">
                    <TextContainer component="contact" subtitle="Haben Sie Fragen?" content="Für Rückfragen oder Angebotsanfragen können Sie mich gerne kontaktieren. " />
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Firma<span class="text-grey-600 capitalize font-light text-xs italic pl-2">(Optional)</span>
                            </label>

                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                E-Mail
                            </label>
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Nachricht
                            </label>
                            <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3">
                            <button class="shadow bg-buttonColorBrightBG hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 uppercase" type="button">
                                Senden
                            </button>
                        </div>
                        <div class="md:w-2/3"></div>
                    </div>
                </form>
            </div>
        </>
    );

}