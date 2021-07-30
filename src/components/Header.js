import React from "react";
import {
  SearchIcon,
  HeartIcon,
  ShoppingCartIcon,
  BellIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    //wrapper
    <div className="bg-primary grid-cols-5 h-16 grid place-content-between sticky w-full z-0">
      {/* logo */}
      <div className="col-span-1">
        <a className="cursor-pointer" href="/">
          <img className="pl-2 h-16 w-24 object-contain" src="/amazon.png" />
        </a>
      </div>
      {/* search */}
      <div className="col-span-2 flex items-center justify-between mt-2 border-gray-500 rounded-2xl border-2 pl-4 h-10 bg-gray-800 overflow-hidden">
        <input
          className="border-none bg-transparent focus:outline-none text-white placeholder-white"
          placeholder="Search..."
          type="text"
        />
        <div className="bg-yellow-500 h-10 w-10 flex items-center justify-center ">
          <SearchIcon className="h-6 text-white rounded-md " />
        </div>
      </div>
      {/* icons */}
      <div className="col-span-2 flex items-center justify-end mr-4 pr-4 text-white">
        <HeartIcon className="h-6 mr-8" />
        <div className="bg-yellow-500 h-10 w-10 relative rounded-lg flex items-center justify-center mr-8  ">
          <ShoppingCartIcon className="h-6 text-black" />
          <div className="absolute -top-1 -right-2 bg-gray-200 w-4 h-4 flex items-center justify-center rounded-full text-xs text-black ">
            1
          </div>
        </div>
        <BellIcon className="h-6 mr-8" />
        <div className="mr-8">
          <img
            loading="lazy"
            className="h-10 w-10 rounded-full"
            src="/basit.jpeg"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
