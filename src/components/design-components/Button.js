export const Button = props => {
    return (
        <>
            <div className="button-container ">
                <button className="button-line">
                    <div className="button-hover-area">
                        <div className="button-colored-area"></div>
                        <span className="button-text">
                            {props.title}
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
        </>
    )
}