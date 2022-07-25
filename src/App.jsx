import { useState } from "react";
import Navigation from "./Navigation";
import Logic from "./Logic";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Navigation />
            <Logic />
        </div>
    );
}

export default App;
