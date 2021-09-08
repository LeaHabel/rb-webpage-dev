export const Card = props => {
    return (
        <>

            <div className="card-flex-responsive spacing-content spacing-card group">
                <img className={"card-img group-hover:hidden " + (props.img ? 'block' : 'hidden')} src={props.img} />
                <img className={"card-img hidden " + (props.imgFill ? 'group-hover:block' : 'hidden')} src={props.imgFill} />
                <div className="card-text-container">
                    <hr className="hairline-card  border-white group-hover:border-darkblue2" />
                    <div className="card-title text-white group-hover:text-darkblue2">{props.title}</div>
                    <p className="card-content text-white group-hover:text-darkblue2">{props.content}</p>

                    <div className="button-container ">
                        <button className="button-line group-hover:w-36 group-hover:border-buttonColorBrightBG">
                            <div className="button-hover-area group-scope ">
                                <div className="button-colored-area group-scope-hover:opacity-100 group-scope-hover:w-36 "></div>
                                <span className="button-text group-scope-hover:text-white group-hover:opacity-100 ">
                                    Mehr Infos
                                </span>
                                <div className="button-arrow group-hover:translate-x-24">
                                    <svg className="button-arrow-svg  group-scope-hover:text-white group-hover:text-buttonColorBrightBG"
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