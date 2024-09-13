import "./App.css";
import { useState } from "react";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);

      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const products = [
    { id: 1, name: "Product1" },
    { id: 2, name: "Product2" },
    { id: 3, name: "Product3" },
  ];

  return (
    <div className="App">
      <h1>Cart</h1>
      {cart.length > 0 && <Cart items={cart} setCart={setCart} />}
      
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
