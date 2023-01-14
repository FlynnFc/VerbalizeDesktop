import Link from "next/link";
import React from "react";

const ServerBar = () => {
  return (
    <div className="bg-base-200 fixed min-h-screen h-full top-0 w-24 flex flex-col justify-start items-center  overflow-auto pt-2">
      <ul className="flex flex-col items-center">
        <li className="btn btn-primary w-16 h-16 mb-2">Profile</li>
        <li className="w-10 border-b-2 border-base-300"></li>
      </ul>
      <ul className="flex flex-col space-y-2 mt-2">
        <Link href={"/tester"}>
          <li className="btn btn-square  w-16 h-16"></li>
        </Link>
        <li className="btn btn-square  w-16 h-16"></li>
        <li className="btn btn-square  w-16 h-16"></li>
        <li className="btn btn-square  w-16 h-16"></li>
        <li className="btn btn-square  w-16 h-16"></li>
        <li className="btn btn-square  w-16 h-16"></li>
        <li className="btn btn-square  w-16 h-16"></li>
        <li className="btn btn-square  w-16 h-16"></li>
        <li className="btn btn-square  w-16 h-16"></li>
        <li className="btn btn-square  w-16 h-16"></li>
        <li className="btn btn-square  w-16 h-16"></li>
        <li className="btn btn-square  w-16 h-16"></li>
        <li className="btn btn-square  w-16 h-16"></li>
        <li className="btn btn-square w-16 h-16"></li>
        <li className="btn btn-square  w-16 h-16"></li>
      </ul>
    </div>
  );
};

export default ServerBar;
