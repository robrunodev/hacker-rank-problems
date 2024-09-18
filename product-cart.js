import React, { useState } from 'react';

const ProductListing = ({ products, cart, setCart }) => {
  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleIncreaseQuantity = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  return (
    <div>
      {products.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            {cartItem ? (
              <div>
                <button onClick={() => handleIncreaseQuantity(product)}>
                  Increase Quantity
                </button>
                <button onClick={() => handleDecreaseQuantity(product)}>
                  Decrease Quantity
                </button>
                <p>Quantity: {cartItem.quantity}</p>
              </div>
            ) : (
              <button onClick={() => handleAddToCart(product)}>
                Add To Cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <ProductListing products={products} cart={cart} setCart={setCart} />
      <Cart cart={cart} />
    </div>
  );
};

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

export default App;