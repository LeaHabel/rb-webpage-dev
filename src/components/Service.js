import ImageOne from '../images/01-wheel.svg';
import ImageTwo from '../images/01-shield.svg';
import ImageThree from '../images/01-prog.svg';
import ImageFour from '../images/01-method.svg';

const Card = props => {
    return (
        <>

            <div class="card-flex-responsive group">
                <img class="card-img" src={props.img} />
                <div class="card-text-container">
                    <hr class="hairline-white-card" />
                    <div class="card-title">{props.title}</div>
                    <p class="card-content">{props.content}</p>
                    <button class="buttonDarkBG">
                        <span class="buttonText">Mehr Infos</span>
                        <div class="button-arrow">
                            <svg
                                className="stroke-current text-buttonColorDarkBG w-6 h-6 border-buttonColorDarkBG"
                                fill="none" stroke="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" /></svg>
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
                <Card img={ImageThree} title="Programmierschulungen" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam." />
                <Card img={ImageFour} title="Methodische Schulungen" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam." />

            </div>

        </>
    );

}
