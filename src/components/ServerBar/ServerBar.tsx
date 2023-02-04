"use client";
import Link from "next/link";
import React, { useState } from "react";

const ServerBar = () => {
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    console.log(e);
    if (e.type === "click") {
      console.log("Left click");
    } else if (e.type === "contextmenu") {
      e.preventDefault();
      console.log("Right click");
      handleRightClick();
    }
  };

  const handleRightClick = () => {};
  return (
    <div className="bg-primary box-border fixed min-h-screen h-full top-0 w-24 flex flex-col justify-start items-center  overflow-y-auto overflow-x-visible pt-2">
      <ul className="flex flex-col items-center">
        <Link href={"./"}>
          <li
            onClick={handleClick}
            onContextMenu={handleClick}
            className="btn w-16 h-16 mb-2"
          >
            Home
          </li>
        </Link>
        <li className="w-10 border-b-2 border-base-300"></li>
      </ul>
      <ul className="flex flex-col space-y-2 mt-2">
        <Link href={"/tester"}>
          <li
            onClick={handleClick}
            onContextMenu={handleClick}
            className="btn  w-16 h-16 hover:rounded-[3rem] transition-all relative"
          >
            Test
          </li>
        </Link>
        <Link href={"/Klon_land"}>
          <li
            onClick={handleClick}
            onContextMenu={handleClick}
            className="btn hover:rounded-[3rem] transition-all w-16 h-16 relative"
          >
            Klon
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default ServerBar;
