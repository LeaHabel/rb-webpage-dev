import ImageOne from '../images/01-wheel.svg';
import ImageTwo from '../images/01-shield.svg';
import ImageThree from '../images/01-prog.svg';
import ImageFour from '../images/01-method.svg';

import ImageOneFill from '../images/001-wheel-fill.svg';
import ImageTwoFill from '../images/001-shield-fill.svg';
import ImageThreeFill from '../images/001-prog-fill.svg';
import ImageFourFill from '../images/001-method-fill.svg';

const Card = props => {
    return (
        <>

            <div class="card-flex-responsive group">
                <img class="card-img block group-hover:hidden" src={props.img} />
                <img class="card-img hidden group-hover:block" src={props.imgFill} />
                <div class="card-text-container">
                    <hr class="hairline-white-card  group-hover:border-darkblue2" />
                    <div class="card-title group-hover:text-darkblue2">{props.title}</div>
                    <p class="card-content group-hover:text-darkblue2">{props.content}</p>

                    <div class="button-container ">
                        <button class="buttonDarkBG group-hover:w-36 ">
                            <div class="bg-buttonColorDarkBG opacity-5 hover:opacity-100 
                            absolute
                            -ml-4 mt-6 w-14 h-10
                            group-scope
                            ">
                            </div>
                            <span class="buttonText 
                            pointer-events-none 
                            group-scope-hover:text-white  
                            group-scope-hover:opacity-100 ">Mehr Infos</span>
                            <div class="button-arrow pointer-events-none group-hover:translate-x-24">
                                <svg
                                    className="stroke-current text-buttonColorDarkBG w-6 h-6 border-buttonColorDarkBG"
                                    fill="none" stroke="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" /></svg>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}
export default function Service() {
    return (
        <>
            <div class="card-bg-responsive bg-midblue1">


                <Card img={ImageOne} imgFill={ImageOneFill} title="Automotive SPICE" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam." />
                <Card img={ImageTwo} imgFill={ImageTwoFill} title="Funktionale Sicherheit ISO 26262" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam." />
                <Card img={ImageThree} imgFill={ImageThreeFill} title="Programmier-Schulungen" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam." />
                <Card img={ImageFour} imgFill={ImageFourFill} title="Methodische Schulungen" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam." />



                <div id="A" class="p-4 shadow group-scope text-yellow-800">
                    <pre>#A.group-scope</pre>
                    <div id="B" class="p-4 my-2 shadow group-scope-hover:bg-blue-500 group-scope-hover:text-white">
                        <pre>#B.group-scope-hover</pre>
                    </div>
                    <div id="C" class="p-4 my-2 shadow group-scope">
                        <pre>#C.group-scope</pre>
                        <div id="D" class="p-4 my-2 shadow group-scope-hover:text-red-500">
                            <pre>#D.group-scope-hover</pre>
                        </div>
                    </div>
                    <div id="E" class="p-4 my-2 shadow group-scope">
                        <pre>#E.group-scope</pre>
                        <div id="F" class="p-4 my-2 shadow p-4">
                            <pre>#F</pre>
                            <div id="G" class="p-4 my-2 shadow group-scope-hover:text-red-500">
                                <pre>#G.group-scope-hover</pre>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );

}
