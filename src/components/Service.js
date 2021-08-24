import ImageOne from '../images/01-wheel.svg';
import ImageTwo from '../images/01-shield.svg';

const Card = props => {
    return (
        <>

            <div class="card-flex-responsive bg-darkblue2 group">
                <img class="card-img" src={props.img} />
                <div class="card-text-container">
                    <hr class="hairline-white-card" />
                    <div class="text-white card-title">{props.title}</div>
                    <p class="text-white card-content">{props.content}</p>
                    <button class="font-bold w-16 mt-16 mb-8 py-2 px-4 inline-flex items-center border-t-2 border-buttonColor
                    ">
                        <span class="text-buttonColor text-xs uppercase font-medium ">Mehr Infos</span>
                        <div class="button-arrow-animation absolute block p-6 px-12 mt-6 -ml-12">
                            <svg
                                className="stroke-current text-buttonColor w-6 h-6 border-buttonColor"
                                fill="none" stroke="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            <rect x="0" y="0" width="100%" height="100%" fill="none" />
                        </div>
                    </button>
                </div>
            </div>

        </>
    )
}
export default function Service() {
    return (
        <>
            <div class="card-bg-responsive bg-midblue1">


                <Card img={ImageOne} title="Automotive SPICE" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam." />
                <Card img={ImageTwo} title="Funktionale Sicherheit ISO 26262" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam." />

            </div>

        </>
    );

}
