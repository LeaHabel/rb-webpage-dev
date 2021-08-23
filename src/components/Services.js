import ImageOne from '../images/01-wheel.png';
import ImageTwo from '../images/01-shield.png';

export default function Services() {
    return (
        <>
            <div className="flex-auto">
                <img src={ImageOne} alt="egg" className="h-full rounded mb-20"></img>
                <div className="center-content">
                    <h1 className="text-2xl mb-2">Automotive SPICE</h1>
                    <p className="mb-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
                    <span className="font-mono">Mehr Infos</span>
                </div>
            </div>

            <div className="flex-auto">
                <img src={ImageTwo} alt="egg" className="h-full rounded mb-20 shadow"></img>
                <div className="center-content">
                    <h1 className="text-2xl mb-2">Funktionale Sicherheit</h1>
                    <p className="mb-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p>
                    <span className="font-mono">Mehr Infos</span>
                </div>
            </div>
        </>
    );

}