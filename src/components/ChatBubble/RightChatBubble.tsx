import React from "react";

const RightChatBubble = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <div className="chat-header">
        Anakin
        <time className="text-xs opacity-50">12:46</time>
      </div>
      <div className="chat-bubble">I hate you!</div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  );
};

export default RightChatBubble;
