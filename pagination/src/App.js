import logo from "./logo.svg";
import "./App.css";
import { useEffect, useReducer } from "react";
const numbersArray = Array.from({ length: 25 }, (_, index) => index + 1);

function App() {
  const itemsPerPage = 5;

  const adjustPages = (state, action) => {
    switch (action.type) {
      case "SET_TOTAL_ITEMS":
        return {
          ...state,
          totalItems: action.payload,
          totalPages: Math.ceil(action.payload / itemsPerPage),
        };
        case "SET_PAGE":
          return {
            ...state,
            currentPage: action.payload,
          };
      default:
        return state;
    }
  };

  const initialState = {
    currentPage: 1,
    totalItems: 0,
    totalPages: 0,
  };
  const [state, dispatch] = useReducer(adjustPages, initialState);
  const startIndex = (state.currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = numbersArray.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (state.currentPage > 1) {
      dispatch({ type: "SET_PAGE", payload: state.currentPage - 1 });
    }
  };

  const handleNextPage = () => {
    if (state.currentPage < state.totalPages) {
      dispatch({ type: "SET_PAGE", payload: state.currentPage + 1 });
    }
  };

  useEffect(() => {
    dispatch({ type: "SET_TOTAL_ITEMS", payload: numbersArray.length });
  }, [numbersArray]);

  return (
    <div className="App">
      {" "}
      <ul>
        {console.log(numbersArray[4])}
        {paginatedData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* Pagination Controls */}
      <div>
        <button
          onClick={handlePrevPage}
          disabled={state.currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {state.currentPage} of {state.totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={state.currentPage === state.totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
