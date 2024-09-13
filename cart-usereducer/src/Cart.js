import React, { useReducer } from "react";

const Cart = ({ items, setCart }) => {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "INCREMENT":
//         return state.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       case "DECREMENT":
//         return state.map((item) =>
//           item.id === action.payload.id
//             ? { ...item, quantity: Math.max(1, item.quantity - 1) }
//             : item
//         );
//       default:
//         throw new Error("Unknown action type.");
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, items);

  const handleIncrement = (product) => {
    // dispatch({ type: "INCREMENT", payload: { id: product.id } });
    // // Update cart in App component
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrement = (product) => {
    // dispatch({ type: "DECREMENT", payload: { id: product.id } });
    // // Update cart in App component
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  return (
    <div>
      <ul>
        {items.map((product) => (
          <li key={product.id}>
            {product.name} - Quantity: {product.quantity}
            <button onClick={() => handleIncrement(product)}>+</button>
            <button onClick={() => handleDecrement(product)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
