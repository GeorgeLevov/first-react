import { useState } from "react";
import "./Input.css";

function Input() {
    return (
        <div className="Input">
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

            <button className="submitButton">Get a new image</button>
        </div>
    );
}

export default Input;
