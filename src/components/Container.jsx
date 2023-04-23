import React from "react";

const Container = ({ children }) => {
  return (
    <section className="container mx-auto px-4 lg:px-0">{children}</section>
  );
};

export default Container;
