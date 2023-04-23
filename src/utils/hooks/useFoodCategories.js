import React from "react";
import food from "../data/food";

const useFoodCategories = () => {
  const categoryKeys = Object.keys(food);
  const categories = [];

  categoryKeys.forEach((key) => {
    categories.push({
      name: key,
      image: food[key][0].image,
    });
  });

  return { categories };
};

export default useFoodCategories;
