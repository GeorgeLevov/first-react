import { useState, useEffect } from "react";
import "./Input.css";
import Image from "./Image";

export default function Input() {
    const [allImages, setAllImages] = useState([]);

    const [imageObject, setImageObject] = useState({
        tcaption: "",
        bcaption: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    function getImage() {
        const imgArray = allImages;
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

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((jsonData) => {
                setAllImages(jsonData.data.memes);
            });
    }, []);

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
