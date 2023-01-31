import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineHashtag } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import {
  TbMicrophone,
  TbMicrophoneOff,
  TbHeadphonesOff,
  TbHeadphones,
} from "react-icons/tb";

export const MyComponent = () => (
  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
);

const Channels = () => {
  const [userStatus, setUserStatus] = useState<"online" | "hidden" | "away">(
    "away"
  );
  const [voiceMuted, setVoiceMuted] = useState(false);
  const [soundMuted, setSoundMuted] = useState(false);
  function toggleVoiceMute() {
    setVoiceMuted((prev) => !prev);
    console.log("Toggling voice mute", voiceMuted);
  }
  function toggleSoundMute() {
    setSoundMuted((prev) => !prev);
    console.log("Toggling sound mute", voiceMuted);
  }
  function displayUserInfo() {
    //Displays details about user
    //Name, change status, logout,
  }

  const adjustedStatus = useMemo(() => {
    if (userStatus === "online") return "green-500";
    else if (userStatus === "hidden") return "base-300";
    else return "yellow-400";
  }, [userStatus]);

  return (
    <>
      <ul className="text-2xl p-2">
        <li className="flex items-center space-x-2 text-xl w-full font-semibold text-left rounded px-3 py-1 mb-1 hover:bg-[#0c03031e] cursor-pointer">
          <HiOutlineHashtag />
          <span>test</span>
        </li>
        <li className="flex items-center space-x-2 text-xl w-full font-semibold text-left rounded px-3 py-1 mb-1 hover:bg-[#0c03031e] cursor-pointer">
          <TbMicrophone />
          <span>voice channel</span>
        </li>
      </ul>
      <div
        onClick={displayUserInfo}
        className="bg-base-200 shadow overflow-hidden p-1 mb-1 ml-[.21rem] rounded-lg w-ful justify-between flex flex-row items-center space-x-2"
      >
        <div className="flex hover:bg-base-300 hover:border-base-300 border border-base-200 bg-base-200 rounded-lg p-2 space-x-1 justify-center items-center">
          <div className="w-10 flex justify-center border-inherit rounded-full bg-inherit">
            <div className="absolute left-3 bottom-8 border-inherit bg-inherit border-[2px] rounded-full w-5 h-5">
              <div
                className={`w-4 h-4 rounded-full border-${adjustedStatus} border-[4px]`}
              ></div>
            </div>
            <img
              className="rounded-full w-8 h-8"
              src="https://placeimg.com/192/192/people"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="leading-none font-bold overflow-hidden max-w-[4rem]">
              QWERT
            </h2>
            <span className="text-xs">#6969</span>
          </div>
        </div>
        <div className="flex space-x-1 text-2xl pr-2 select-none">
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="hover:bg-base-300 p-1 rounded-lg"
            whileTap={{ scale: 0.9 }}
            onClick={toggleVoiceMute}
          >
            {voiceMuted || soundMuted ? <TbMicrophoneOff /> : <TbMicrophone />}
          </motion.span>
          <motion.span
            className="hover:bg-base-300 p-1 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleSoundMute}
          >
            {soundMuted ? <TbHeadphonesOff /> : <TbHeadphones />}
          </motion.span>
          <motion.span
            className="hover:bg-base-300 p-1 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MdOutlineSettings />
          </motion.span>
        </div>
      </div>
    </>
  );
};

export default Channels;
