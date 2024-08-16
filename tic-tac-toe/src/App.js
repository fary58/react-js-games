import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState();

  const playMove = (e) => {
    let arr = [...board];
    if (turn === "X") {
      arr[e.target.id] = "X";
      setTurn("O");
    } else {
      arr[e.target.id] = "O";
      setTurn("X");
    }
    checkwinner(arr);
    setBoard(arr);
  };

  const checkwinner = (arr) => {
    const winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let combo of winners) {
      const [a, b, c] = combo;
      if (arr[a] === "" || arr[b] === "" || arr[c] === "") {
      } else if (arr[a] === arr[b] && arr[b] === arr[c]) {
        setWinner(arr[a]);
      }
    }
  };

  return (
    <div className="App">
      {winner ? (
        `Winner is: ${winner}`
      ) : (
        <div>
          {" "}
          <table className="table-head">
            <tbody>
              <tr>
                <td id="0" onClick={playMove}>
                  {board[0]}
                </td>
                <td id="1" onClick={playMove}>
                  {board[1]}
                </td>
                <td id="2" onClick={playMove}>
                  {board[2]}
                </td>
              </tr>

              <tr>
                <td id="3" onClick={playMove}>
                  {board[3]}
                </td>
                <td id="4" onClick={playMove}>
                  {board[4]}
                </td>
                <td id="5" onClick={playMove}>
                  {board[5]}
                </td>
              </tr>

              <tr>
                <td id="6" onClick={playMove}>
                  {board[6]}
                </td>
                <td id="7" onClick={playMove}>
                  {board[7]}
                </td>
                <td id="8" onClick={playMove}>
                  {board[8]}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
