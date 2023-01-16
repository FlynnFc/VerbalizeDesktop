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
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">
          You were the Chosen One! You were the Chosen One! You were the Chosen
          One! You were the Chosen One! You were the Chosen One!
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </>
  );
};

export default LeftChatBubble;
