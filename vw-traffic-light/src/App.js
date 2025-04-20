import "./App.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

function App() {
  const [isGreen, setIsGreen] = useState(false);
  const [isRed, setIsRed] = useState(false);
  const [isYellow, setIsYellow] = useState(false);
  const handleGreen = () => {
    setIsGreen((current) => !current);
  };
  const handleRed = () => {
    setIsRed((current) => !current);
  };
  const handleYellow = () => {
    setIsYellow((current) => !current);
  };

  useEffect(() => {
    const startCycle = async () => {
      while (true) {
        setIsGreen(true);
        setIsRed(false);
        setIsYellow(false);
        await delay(5 * 1000);

        setIsGreen(false);
        setIsRed(true);
        await delay(5 * 1000);

        setIsRed(false);
        setIsYellow(true);
        await delay(5 * 1000);
      }
    };

    startCycle();
  }, []);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  return (
    <div className="App">
      <h3>Volkswagen Project</h3>
      <div className="main">
        <div className="trafficLight light-first">
          <span
            className="green"
            style={{
              backgroundColor: isGreen ? "green" : "",
            }}
            onClick={handleGreen}
          ></span>
          <span
            className="red"
            style={{
              backgroundColor: isRed ? "red" : "",
            }}
            onClick={handleRed}
          ></span>
          <span
            className="yellow"
            style={{
              backgroundColor: isYellow ? "yellow" : "",
            }}
            onClick={handleYellow}
          ></span>
        </div>
        <div className="trafficLight light-second">
          <span
            className="green"
            style={{
              backgroundColor: isGreen ? "green" : "",
            }}
            onClick={handleGreen}
          ></span>
          <span
            className="red"
            style={{
              backgroundColor: isRed ? "red" : "",
            }}
            onClick={handleRed}
          ></span>
          <span
            className="yellow"
            style={{
              backgroundColor: isYellow ? "yellow" : "",
            }}
            onClick={handleYellow}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default App;
