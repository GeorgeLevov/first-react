import { useState } from "react";
import "./Logic.css";
import imgData from "../imgData";

function Logic() {
    const [image, setImage] = useState("");

    function getImage() {
        const imgArray = imgData.data.memes;
        const randomNumber = Math.floor(Math.random() * imgArray.length);
        setImage(imgArray[randomNumber].url);
    }

    return (
        <div className="Logic">
            <form>
                <input
                    type="text"
                    id="tcaption"
                    name="tcaption"
                    placeholder="Top caption"
                />

                <input
                    type="text"
                    id="bcaption"
                    name="bcaption"
                    placeholder="Bottom caption"
                />
            </form>

            <button className="submitButton" onClick={getImage}>
                Get a new image
            </button>

            <img className="generatedImage" src={image} />
        </div>
    );
}

export default Logic;
