import React from "react";
import { HiOutlineHashtag } from "react-icons/hi";
const Channels = () => {
  return (
    <div className="containerSideNav ">
      <ul className="text-2xl">
        <li className="flex items-center space-x-2 text-xl w-full font-semibold text-left rounded px-3 py-1 mb-1 hover:bg-[#0c03031e] cursor-pointer">
          <HiOutlineHashtag />
          <span>test</span>
        </li>
      </ul>
    </div>
  );
};

export default Channels;
