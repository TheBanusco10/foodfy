import React from "react";
import food from "../data/food";

const useFoodByCategory = (category) => {
  return food[category] || [];
};

export default useFoodByCategory;
