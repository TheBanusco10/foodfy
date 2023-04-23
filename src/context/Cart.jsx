import food from "@/utils/data/food";
import React, { useState } from "react";

export const CartContext = React.createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isLoadingCart, setIsLoadingCart] = useState(false);

  const addToCart = (id, category) => {
    setIsLoadingCart(true);
    const products = food[category];

    const productIndex = cart.findIndex((item) => item.id === id);

    productIndex === -1
      ? addNewProduct(products[id])
      : addQuantity(productIndex);

    setIsLoadingCart(false);
  };

  const addNewProduct = ({ id, name, price }) => {
    setCart([
      ...cart,
      {
        id,
        name,
        pricePerUnit: price,
        quantity: 1,
      },
    ]);
  };

  const addQuantity = (productIndex) => {
    const cartUpdated = [...cart];
    cartUpdated[productIndex].quantity++;

    setCart(cartUpdated);
  };

  return (
    <CartContext.Provider value={{ cart, isLoadingCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
