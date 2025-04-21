import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currentLight, setCurrentLight] = useState("green");

  useEffect(() => {
    let timeoutId;
    console.log("sss");

    const cycleLights = () => {
      switch (currentLight) {
        case "green":
          timeoutId = setTimeout(() => setCurrentLight("red"), 2 * 1000); // 2 min
          break;
        case "red":
          timeoutId = setTimeout(() => setCurrentLight("yellow"), 2 * 1000); // 30 sec
          break;
        case "yellow":
          timeoutId = setTimeout(() => setCurrentLight("green"), 2 * 1000); // 10 sec
          break;
        default:
          break;
      }
    };

    cycleLights();

    return () => clearTimeout(timeoutId); // Cleanup on re-render
  }, [currentLight]);

  const handleNext = () => {
    // Manually move to next light
    setCurrentLight((prev) => {
      if (prev === "green") return "red";
      if (prev === "red") return "yellow";
      return "green";
    });
  };

  return (
    <div className="App">
      <h2>Traffic Light System</h2>
      <div className="traffic-light">
        <span className={`light red ${currentLight === "red" ? "on" : ""}`} />
        <span className={`light yellow ${currentLight === "yellow" ? "on" : ""}`} />
        <span className={`light green ${currentLight === "green" ? "on" : ""}`} />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;
