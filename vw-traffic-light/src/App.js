import logo from "./logo.svg";
import "./App.css";
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
      <h3>Volkswagen Project</h3>
      <div className="main">
        <div className="trafficLight">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>
        <Button
          style={{
            backgroundColor: isActive ? "red" : "",
            color: isActive ? "white" : "",
          }}
          onClick={handleClick}
        >
          {" "}
          Test{" "}
        </Button>
      </div>
    </div>
  );
}

export default App;
