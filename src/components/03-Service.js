import { HashLink as Link } from 'react-router-hash-link';

import { Card } from './design-components/Card';
import { TopicHeadline } from './design-components/TopicHeadline'

import { MenuItems } from './navbar-with-dropdown/MenuItems';

import ImageOne from '../images/01-wheel.svg';
import ImageTwo from '../images/01-shield.svg';
import ImageThree from '../images/01-prog.svg';
import ImageFour from '../images/01-method.svg';

import ImageOneFill from '../images/001-wheel-fill.svg';
import ImageTwoFill from '../images/001-shield-fill.svg';
import ImageThreeFill from '../images/001-prog-fill.svg';
import ImageFourFill from '../images/001-method-fill.svg';

export default function Service() {
    return (
        <>
            <div id='service'>
                <TopicHeadline headline="Leistungen" bgColor="bg-blue500" textColor="text-white" />

                <div className="card-bg-responsive bg-blue500">

                    <Card
                        img={ImageOne}
                        imgFill={ImageOneFill}
                        title="Automotive SPICE"
                        link="/service1"
                        content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam."
                    />
                    <Card
                        img={ImageTwo}
                        imgFill={ImageTwoFill}
                        title="Funktionale Sicherheit ISO 26262"
                        link="/service2"
                        content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam."
                    />
                    <Card
                        img={ImageThree}
                        imgFill={ImageThreeFill}
                        title="Programmier-Schulungen"
                        link="/service3"
                        content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam."
                    />
                    <Card
                        img={ImageFour}
                        imgFill={ImageFourFill}
                        title="Methodische Schulungen"
                        link="/service4"
                        content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam."
                    />
                </div>
            </div>
        </>
    );

}
