import React from "react";

function Entry(props) {
    return (
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label="HobbyEmoji">
                    {props.emoji}
                </span>
                <span>{props.name}</span>
            </dt>
            <dd>{props.description}</dd>
        </div>
    );
}

export default Entry;