import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import type { Message } from "./ChatMessage";
import axios from "axios";
import { useParams } from "react-router";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const { persona } = useParams();

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Generate a unique ID for messages
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  // Handle sending a message
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    // Add user message to chat
    const userMessage: Message = {
      id: generateId(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Replace with your actual API endpoint

      const response = await axios.post("http://localhost:3000/chat", {
        message: inputMessage,
      });
      console.log("Response:", response.data);
      // Add assistant response to chat
      const assistantMessage: Message = {
        id: generateId(),
        text:
          response.data.message || "Sorry, I couldn't process that request.",
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);

      // Add error message
      const errorMessage: Message = {
        id: generateId(),
        text: "Sorry, there was an error processing your message. Please try again.",
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-170px)] container mx-auto px-4 mt-5 max-w-[54rem]  relative  ">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 ">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <p>Start a conversation with {persona}!</p>
          </div>
        ) : (
          messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              persona={persona ?? ""}
            />
          ))
        )}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-200 text-gray-800 rounded-lg p-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-gray-600 animate-bounce"></div>
                <div
                  className="w-2 h-2 rounded-full bg-gray-600 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 rounded-full bg-gray-600 animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={endOfMessagesRef} />
      </div>

      <form
        onSubmit={handleSendMessage}
        className="border-t p-4 fixed bottom-0 left-0 right-0 max-w-[54rem] m-auto"
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={`Message ${persona}...`}
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !inputMessage.trim()}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
