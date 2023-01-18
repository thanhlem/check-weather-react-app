import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Hanoi" />
        <footer>
          This project was coded by{" "}
          <a
            className="App-link"
            href="https://github.com/thanhlem"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thanh Le
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
