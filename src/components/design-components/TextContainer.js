import React from "react";

export const TextContainer = props => {
    return (
        <>
            <div className={`text-container flex flex-col ${props.component}`}>
                <hr className="hairline-card border-blue700 " />
                <div className="card-title text-blue700">{props.title}</div>
                <h4 className="text-blue700">{props.subtitle}</h4>
                <br />
                <p className="card-content text-blue700">{props.content}</p>

            </div>
        </>
    )
}
