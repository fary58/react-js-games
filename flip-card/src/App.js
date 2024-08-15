import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [card1, setCard1] = useState(null);
  const [card2, setCard2] = useState(null);
  const [flippedValues, setFlippedValues] = useState(Array(15).fill("?"));

  const initGame = (e) => {
    const index = parseInt(e.target.id);
    const value = items[index]; // Get the value based on the index clicked

    if (card1 === null) {
      setCard1(index);
      setFlippedValues((prev) => {
        const newFlipped = [...prev];
        newFlipped[index] = value;
        return newFlipped;
      });
    } else if (card2 === null && card1 !== index) {
      setCard2(index);
      setFlippedValues((prev) => {
        const newFlipped = [...prev];
        newFlipped[index] = value;
        return newFlipped;
      });
      checkWinner(index);
    }
  };

  const checkWinner = (card2Index) => {
    if (items[card1] !== items[card2Index]) {
      setTimeout(() => {
        // Hide values if they don't match
        setFlippedValues((prev) => {
          const newFlipped = [...prev];
          newFlipped[card1] = "?";
          newFlipped[card2Index] = "?";
          return newFlipped;
        });
        setCard1(null);
        setCard2(null);
      }, 1000); // Delay to show the second card before flipping back
    } else {
      // Reset chosen cards
      setCard1(null);
      setCard2(null);
    }
  };

  useEffect(() => {
    const List = Array.from({ length: 15 }, (_, i) => Math.floor(Math.random() * 11));
    setItems(List);
  }, []);

  return (
    <div className="container">
      <ul className="box-head">
        {items.map((_, index) => (
          <li
            key={index}
            id={index}
            className="box-body"
            onClick={initGame}
          >
            {flippedValues[index]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
