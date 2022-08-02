import { useState } from "react";
import "./Input.css";
import imgData from "../imgData";
import Image from "./Image";

function Input() {
    const [imageObject, setImageObject] = useState({
        tcaption: "",
        bcaption: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allImages, setAllImages] = useState(imgData);

    function getImage() {
        const imgArray = allImages.data.memes;
        const randomNumber = Math.floor(Math.random() * imgArray.length);
        setImageObject((prevObject) => ({
            ...prevObject,
            randomImage: imgArray[randomNumber].url,
        }));
    }

    function setText(event) {
        const { name, value } = event.target;
        setImageObject((prevObject) => ({
            ...prevObject,
            [name]: value,
        }));
        console.log(imageObject);
    }

    return (
        <div className="Input">
            <form>
                <input
                    type="text"
                    placeholder="Top caption"
                    id="tcaption"
                    name="tcaption"
                    value={imageObject.tcaption}
                    onChange={setText}
                />

                <input
                    type="text"
                    placeholder="Bottom caption"
                    id="bcaption"
                    name="bcaption"
                    value={imageObject.bcaption}
                    onChange={setText}
                />
            </form>

            <button className="submitButton" onClick={getImage}>
                Get a new image
            </button>

            <Image
                url={imageObject.randomImage}
                ttext={imageObject.tcaption}
                btext={imageObject.bcaption}
            />
        </div>
    );
}

export default Input;
