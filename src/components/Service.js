import ImageOne from '../images/01-wheel.svg';
import ImageTwo from '../images/01-shield.svg';

const Card = props => {
    return (
        <>

            <div class="card-flex-responsive bg-darkblue2">
                <img class="card-img" src={props.img} />
                <div class="card-text-container">
                    <hr class="hairline-white" />
                    <div class="text-white font-bitter card-title">{props.title}</div>
                    <p class="text-white">{props.content}</p>
                    <p class="text-white text-base">Read more</p>
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
