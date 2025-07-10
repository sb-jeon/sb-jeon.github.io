import "./App.css";
import logo from "./logo.svg";

function App() {
  const handleClick = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    };

    fetch("http://localhost:3002/projects", options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Mockoon test</button>
      </header>
    </div>
  );
}

export default App;
