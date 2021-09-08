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
                <div className="start-container">

                    <main className="start-main">
                        <div className="start-text-content">
                            <hr class="hairline-display border-white" />
                            <h1 className="start-headline">
                                <span className="block xl:inline">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                </span>{' '}
                            </h1>
                            <p className="start-sub-headline">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            </p>
                        </div>
                    </main>

                </div>
            </div>
            <div className="background">
                <img src={StartImg} alt="blueImage" className="backgroundImg"></img>
            </div>
        </div>
    )
}