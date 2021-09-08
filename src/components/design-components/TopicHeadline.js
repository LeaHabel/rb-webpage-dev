import React from "react";

export const TopicHeadline = props => {
    return (
        <>
            <div className={`spacing-headline  ${props.bgColor}`}></div>
            <h2 class={`${props.textColor}`}>{props.headline}</h2>
        </>
    )
}
