import React from "react";

type messageProps = {
  message: string;
  status: string;
  img: string;
  name: string;
  timeSent: Date;
};

const LeftChatBubble = (props: messageProps) => {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar mb-1">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="chat-header">
          <h4 className="inline pr-1 ">{props.name}</h4>

          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="">
          <p>{props.message}</p>
        </div>
      </div>
    </>
  );
};

export default LeftChatBubble;
