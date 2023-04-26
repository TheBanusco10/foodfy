import { CartContext } from "@/context/Cart";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AiOutlineShopping } from "react-icons/ai";

const FoodCard = ({ id, name, image, ingredients, price }) => {
  const { isLoadingCart, addToCart } = useContext(CartContext);

  const router = useRouter();

  const { category } = router.query;

  return (
    <article className="w-full flex justify-center items-center rounded overflow-hidden shadow bg-white">
      <img src={image} alt={name} className="w-36 h-full" />
      <div className="w-full h-full flex justify-between pl-3">
        <div className="w-10/12 lg:w-11/12 pr-3">
          <p className="font-bold">{name}</p>
          <p className="break-words text-xs my-3 capitalize">
            {ingredients.join(", ")}
          </p>
          <p className="font-thin text-lg">{price}$</p>
        </div>
        <button
          className="w-2/12 lg:w-1/12 h-full flex justify-center items-center bg-emerald-400 disabled:bg-emerald-300 hover:bg-emerald-500 transition duration-300"
          onClick={() => addToCart(id, category)}
          disabled={isLoadingCart}
        >
          <AiOutlineShopping className="w-7 h-7 text-white" />
        </button>
      </div>
    </article>
  );
};

export default FoodCard;
