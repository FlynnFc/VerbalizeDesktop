import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineHashtag } from "react-icons/hi";
import { MdKeyboardVoice, MdSettingsInputComponent } from "react-icons/md";
import { BsHeadphones } from "react-icons/bs";
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

  return (
    <>
      <ul className="text-2xl p-2">
        <li className="flex items-center space-x-2 text-xl w-full font-semibold text-left rounded px-3 py-1 mb-1 hover:bg-[#0c03031e] cursor-pointer">
          <HiOutlineHashtag />
          <span>test</span>
        </li>
        <li className="flex items-center space-x-2 text-xl w-full font-semibold text-left rounded px-3 py-1 mb-1 hover:bg-[#0c03031e] cursor-pointer">
          <MdKeyboardVoice />
          <span>voice channel</span>
        </li>
      </ul>
      <div className="bg-base-200 shadow overflow-hidden py-2 px-1 mb-1 ml-[.21rem] rounded-lg w-ful justify-between flex flex-row items-center space-x-2">
        <div className="flex space-x-1 justify-center items-center">
          <div className="w-10 rounded-full">
            <img
              className="rounded-full"
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
            whileTap={{ scale: 0.9 }}
            onClick={toggleVoiceMute}
          >
            {voiceMuted || soundMuted ? <TbMicrophoneOff /> : <TbMicrophone />}
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleSoundMute}
          >
            {soundMuted ? <TbHeadphonesOff /> : <TbHeadphones />}
          </motion.span>
          <MdSettingsInputComponent />
        </div>
      </div>
    </>
  );
};

export default Channels;
