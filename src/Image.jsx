import { useState } from "react";
import "./Image.css";

function Image(props) {
    return (
        <div className="generated-image-container">
            <img className="generated-image" src={props.url} />;
            <h2 className="generated-text top">{props.ttext}</h2>
            <h2 className="generated-text bottom">{props.btext}</h2>
        </div>
    );
}

export default Image;
