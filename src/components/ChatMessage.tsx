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
        className={`max-w-[80%] rounded-2xl p-4 ${
          isUser
            ? "bg-[#343541] text-white"
            : "bg-[#444654] text-gray-100 border border-gray-700"
        }`}
      >
        <div className="font-medium text-sm mb-1">
          {isUser ? "You" : persona}
        </div>
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{message.text}</ReactMarkdown>
        </div>
        <div className="text-xs text-gray-400 text-right mt-2">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ChatMessage);
