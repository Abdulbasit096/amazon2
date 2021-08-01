import React from "react";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";

function Product({favorite , url , name , company ,ratings , reviews , price}) {
  return (
    <div className="h-80 cursor-pointer w-64 m-2 relative ">
      {/* Heart */}
      {favorite && <HeartIcon className="h-10 absolute top-0 right-0  w-10 text-yellow-500" />}
      {/* Img */}
      <img
        src={url}
        className="w-38 mt-4"
      />
      {/* Name and company */}
      <div className='-mt-4'>
        <h3 className='font-bold text-xl'>{name}</h3>
        <p className='font-bold' style={{
            color:'#4E9EA9'
        }}>{company}</p>
      </div>
{/*  */}
      <div className='flex'>
      {Array(ratings)
            .fill()
            .map((_, i) => (
                <StarIcon className="h-6 w-6 text-yellow-500" />
            ))}
        {/* Ratings and Reviews */}
        <p className='font-semibold'>({reviews} reviews)</p>
      </div>
      {/* Price */}
      <p className='font-bold text-3xl'>${price}</p>
    </div>
  );
}

export default Product;
