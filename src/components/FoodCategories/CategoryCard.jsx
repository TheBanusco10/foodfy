import Link from "next/link";
import React from "react";

const CategoryCard = ({ name, image }) => {
  return (
    <Link
      href={`/${name}`}
      className="grow relative w-full lg:w-4/12 lg:h-64 rounded shadow-lg overflow-hidden hover:cursor-pointer group"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-44 lg:h-full brightness-50 object-cover group-hover:brightness-[.6] group-hover:scale-105 transition duration-300"
      />
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase text-2xl tracking-widest text-white">
        {name}
      </p>
    </Link>
  );
};

export default CategoryCard;
