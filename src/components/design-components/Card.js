export const Card = props => {
    return (
        <>

            <div className="card-flex-responsive spacing-content spacing-card ">
                <img className={"card-img imgDarkBG " + (props.img ? 'block' : 'hidden')} src={props.img} />
                <img className={"card-img imgBrightBG " + (props.imgFill ? 'onlyShowIfImgExists' : 'hidden')} src={props.imgFill} />

                <div className="text-container card-text-container">
                    <hr className="hairline-card  border-white" />
                    <div className="card-title text-white">{props.title}</div>
                    <p className="card-content text-white">{props.content}</p>

                    <div className="button-container ">
                        <button className="button-line">
                            <div className="button-hover-area">
                                <div className="button-colored-area"></div>
                                <span className="button-text">
                                    Mehr Infos
                                </span>
                                <div className="button-arrow">
                                    <svg className="button-arrow-svg"
                                        fill="none" stroke="" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}