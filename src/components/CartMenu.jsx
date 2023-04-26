import React, { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Container from "./Container";
import { CartContext } from "@/context/Cart";

const CartMenu = () => {
  const [showCartOverview, setShowCartOverview] = useState(false);

  return (
    <>
      <AiOutlineShoppingCart
        className="w-7 h-7"
        onClick={() => setShowCartOverview(true)}
      />
      {showCartOverview && <CartOverview />}
    </>
  );
};

const CartOverview = () => {
  const { cart } = useContext(CartContext);

  return (
    <section className="bg-white shadow">
      <Container>
        {cart.map(({ name }) => (
          <p>{name}</p>
        ))}
      </Container>
    </section>
  );
};

export default CartMenu;
