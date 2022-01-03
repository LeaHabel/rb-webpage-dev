import { HashLink as Link } from 'react-router-hash-link';

import { Button } from './Button';

export const Card = props => {
    return (
        <>


            <Link to={props.link} className="card-flex-responsive spacing-content spacing-card ">
                <img className={"card-img imgDarkBG " + (props.img ? 'block' : 'hidden')} src={props.img} />
                <img className={"card-img imgBrightBG " + (props.imgFill ? 'onlyShowIfImgExists' : 'hidden')} src={props.imgFill} />

                <div className="text-container card-text-container">
                    <hr className="hairline-card  border-white" />
                    <div className="card-title text-white">{props.title}</div>
                    <p className="card-content text-white">{props.content}</p>

                    <Button title="Mehr Infos"></Button>

                </div>
            </Link>
        </>
    )
}