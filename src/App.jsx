import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navigation from "./Navigation";
import Input from "./Input";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Navigation />
            <Input />
        </div>
    );
}

export default App;
