import Container from "@/components/Container";
import FoodCard from "@/components/Food/FoodCard";
import useFoodByCategory from "@/utils/hooks/useFoodByCategory";
import { useRouter } from "next/router";
import React from "react";

const FoodPage = () => {
  const router = useRouter();

  const { category } = router.query;

  const food = useFoodByCategory(category);

  return (
    <Container>
      <h1 className="uppercase text-center text-2xl mb-8">{category}</h1>
      <section className="w-full flex flex-wrap gap-3">
        {food.map((food, index) => (
          <FoodCard {...food} key={index} />
        ))}
      </section>
    </Container>
  );
};

export default FoodPage;
