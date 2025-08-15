import React from "react";
import ReactMarkdown from "react-markdown";

export interface Message {
  id: string;
  text: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
  persona: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, persona }) => {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[70%] rounded-lg p-3 ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        <div className="font-bold">{isUser ? "You" : persona}</div>
        <p>
          <ReactMarkdown>{message.text}</ReactMarkdown>
        </p>
        <div className="text-xs opacity-70 text-right mt-1">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
