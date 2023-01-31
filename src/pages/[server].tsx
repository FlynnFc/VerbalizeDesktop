import { useRouter } from "next/router";
import React from "react";
import Channels from "../components/Channels/Channels";
import LeftChatBubble from "../components/ChatBubble/LeftChatBubble";
import RightChatBubble from "../components/ChatBubble/RightChatBubble";
import { AiOutlineSend } from "react-icons/ai";
import { motion } from "framer-motion";

const MainPage = () => {
  const { query } = useRouter();
  return (
    <div className="max-w-screen overflow-hidden flex flex-col z-0">
      <ServerNav serverName={query.server} />
      <section className="containerSideNav flex flex-col justify-between">
        <Channels />
      </section>
      <section className="bg-base-200 containerBody flex justify-end flex-col">
        <div className="overflow-y-auto px-3">
          <h2 className="text-4xl text-center font-bold border-b pb-4">
            Beginning of chat
          </h2>
          <ul>
            <li>
              <RightChatBubble />
            </li>
            <li>
              <RightChatBubble />
            </li>
            <li>
              <RightChatBubble />
            </li>
            <li>
              <LeftChatBubble />
            </li>
            <li>
              <RightChatBubble />
            </li>
            <li>
              <LeftChatBubble />
            </li>
            <li>
              <RightChatBubble />
            </li>
            <li>
              <RightChatBubble />
            </li>
            <li>
              <RightChatBubble />
            </li>
            <li>
              <LeftChatBubble />
            </li>
            <li>
              <RightChatBubble />
            </li>
            <li>
              <LeftChatBubble />
            </li>
            <li>
              <RightChatBubble />
            </li>
            <li>
              <RightChatBubble />
            </li>
            <li>
              <RightChatBubble />
            </li>
            <li>
              <LeftChatBubble />
            </li>
            <li>
              <RightChatBubble />
            </li>
            <li>
              <LeftChatBubble />
            </li>
          </ul>
        </div>
        <div className="w-full">
          <div className="w-full flex items-center bottom-4 input">
            <input
              type="text"
              placeholder="message"
              className="bg-transparent shadow-none w-full"
            />
            <span className="text-2xl">
              <AiOutlineSend />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;

const ServerNav = (props: { serverName: string | string[] }) => {
  return (
    <nav className="top-0 mainNav z-10 h-10 fixed bg-base-100 text-base-content shadow-lg flex justify-between">
      <div className="dropdown flex w-56 bg-base-100  text-base-content">
        <label
          tabIndex={0}
          className="p-2 m-1 mx-2 rounded-lg flex justify-center items-center select-none text-lg text-center w-full cursor-pointer hover:bg-[#acaaaa23]"
        >
          {props.serverName}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-lg box w-52 mt-12 m-2 justify-center"
        >
          <li className="menu-title elect-none">
            <span>Server settings</span>
          </li>
          <li className="px-4 cursor-pointer text-base-content py-2 hover:bg-[#acaaaa23] rounded leading-normal">
            Item 1
          </li>
          <li className="px-4 cursor-pointer text-base-content py-2 hover:bg-[#acaaaa23] rounded leading-normal">
            Item 2
          </li>
          <li className="menu-title select-none">
            <span>Notifcation settings</span>
          </li>
          <li className="px-4 cursor-pointer text-base-content py-2 hover:bg-[#acaaaa23] rounded leading-normal">
            Item 1
          </li>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="bg-error cursor-pointer mt-1 shadow m-auto rounded font-bold text-center text-base-content p-1 w-[90%]"
          >
            Leave server
          </motion.span>
        </ul>
      </div>
      <div className="flex items-center w-52">
        <input
          type="text"
          placeholder="Search"
          className="input-sm h-6 bg-base-300"
        />
      </div>
    </nav>
  );
};
