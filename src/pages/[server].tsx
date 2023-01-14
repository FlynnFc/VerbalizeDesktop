import React from "react";

const MainPage = () => {
  return (
    <div className="max-w-screen overflow-hidden">
      <ServerNav />
      <div className="w-full flex justify-center bg-base-300 min-h-screen">
        test
      </div>
    </div>
  );
};

export default MainPage;

const ServerNav = () => {
  return (
    <nav className="top-0 h-10 fixed mainContainer bg-base-content text-base-300 flex justify-between">
      <div className="dropdown flex w-56 bg-primary">
        <label tabIndex={0} className="m-1 text-lg text-center w-full">
          Server Name
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded box w-52 mt-12 m-2"
        >
          <li className="menu-title">
            <span>Category</span>
          </li>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li className="menu-title">
            <span>Category</span>
          </li>
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center w-52">
        <input type="text" className="input-sm h-6" />
      </div>
    </nav>
  );
};
