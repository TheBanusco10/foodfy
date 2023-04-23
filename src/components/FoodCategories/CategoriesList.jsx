import useFoodCategories from "@/utils/hooks/useFoodCategories";
import React from "react";
import CategoryCard from "./CategoryCard";

const CategoriesList = () => {
  const { categories } = useFoodCategories();

  return (
    <section className="flex flex-wrap lg:flex-1 gap-3 justify-center items-center p-2">
      {categories.map((category, index) => (
        <CategoryCard {...category} key={index} />
      ))}
    </section>
  );
};

export default CategoriesList;
