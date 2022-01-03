import { Fragment } from 'react'

import StartImg from '../images/BG_2.jpg'

export default function Home() {
    return (
        <div className="start-component">
            <div className="start-container">

                <div className="start-text-content">
                    <hr class="hairline-display border-black" />
                    <h1 className="start-headline">
                        <span className="block xl:inline text-black">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </span>
                    </h1>
                    <p className="start-sub-headline text-black">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                    </p>
                </div>

            </div>
            <div className="background">
                <img src={StartImg} alt="blueImage" className="backgroundImg"></img>
            </div>
        </div >
    )
}