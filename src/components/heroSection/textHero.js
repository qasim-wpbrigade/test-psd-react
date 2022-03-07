import React from "react";

const TextHero = ({ name }) => {
    return (
        <div className="textHero">
            <div className="container"><h1>{name}</h1></div>
        </div>
    );
};

export default TextHero;
