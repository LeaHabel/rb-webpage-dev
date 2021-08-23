import { Fragment } from 'react'

import StartImg from '../images/BG.jpg'


const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Example() {
    return (
        <div className="relative bg-white overflow-hidden h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="absolute z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

                    <main className="mt-32 mx-auto max-w-7xl px-4 sm:mt-16 sm:px-6 md:mt-32 lg:mt-32 lg:px-8 xl:mt-56">
                        <div className="sm:text-left lg:text-left">
                            <hr class="hairline-white-display" />
                            <h1 className="text-2xl tracking-tight text-white font-bitter font-medium sm:text-4xl md:text-5xl">
                                <span className="block xl:inline">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                </span>{' '}
                            </h1>
                            <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:left-0 md:mt-5 md:text-xl lg:mx-0">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            </p>

                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:w-full lg:h-auto">

                <img src={StartImg} alt="blueImage" className="sm:h-full sm:w-auto md:w-full md:h-auto lg:w-full lg:h-full max-w-none"></img>
            </div>
        </div>
    )
}