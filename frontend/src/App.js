import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <button
                    onClick={(ev) => {
                        ev.preventDefault();
                        window.open("http://localhost:4242/google", "_self");
                    }}
                >
                    go google
                </button>
                <button
                    onClick={async function name(e) {
                        const a = await axios.get(
                            "http://localhost:4242/login/success"
                        );
                        console.log(a);
                    }}
                >
                    hi
                </button>
            </header>
        </div>
    );
}

export default App;
