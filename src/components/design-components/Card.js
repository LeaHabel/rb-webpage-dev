export const Card = props => {
    return (
        <>

            <div class="card-flex-responsive group">
                <img class={"card-img group-hover:hidden " + (props.img ? 'block' : 'hidden')} src={props.img} />
                <img class={"card-img hidden " + (props.imgFill ? 'group-hover:block' : 'hidden')} src={props.imgFill} />
                <div class="card-text-container">
                    <hr class="hairline-white-card  group-hover:border-darkblue2" />
                    <div class="card-title group-hover:text-darkblue2">{props.title}</div>
                    <p class="card-content group-hover:text-darkblue2">{props.content}</p>

                    <div class="button-container ">
                        <button class="button-line group-hover:w-36 ">
                            <div class="button-hover-area group-scope ">
                                <div class="button-colored-area group-scope-hover:opacity-100 group-scope-hover:w-36 "></div>
                                <span class="button-text group-scope-hover:text-white group-hover:opacity-100 ">
                                    Mehr Infos
                                </span>
                                <div class="button-arrow group-hover:translate-x-24">
                                    <svg className="button-arrow-svg group-scope-hover:text-white"
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