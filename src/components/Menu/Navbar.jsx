import React from "react";
import Container from "../Container";
import CartMenu from "../CartMenu";

const Navbar = () => {
  return (
    <header className="h-14 bg-emerald-500 rounded-b shadow text-white">
      <Container className="h-full flex justify-between items-center">
        <h1>Foodfy</h1>
        <div>
          <CartMenu />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
