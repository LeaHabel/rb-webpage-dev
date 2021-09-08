import React from "react";

export const TextContainer = props => {
    return (
        <>
            <div className={`card-text-container flex flex-col ${props.component}`}>
                <hr className="hairline-card border-darkblue1 " />
                <div className="card-title text-darkblue1">{props.title}</div>
                <h4 className="text-darkblue1">{props.subtitle}</h4>
                <br />
                <p className="card-content text-darkblue1">{props.content}</p>

            </div>
        </>
    )
}
