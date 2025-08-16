/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Persona } from "../constants/enum/persona";

// Make sure you have Material Symbols font loaded in your index.html or _app.tsx:
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

interface ChatSuggestionProps {
  persona: string;
  onSuggestionClick?: (suggestion: string) => void;
}

const workSuggestions = [
  {
    icon: "question_answer",
    color: "text-yellow-400",
    text: "Tell me Favorite Programming Language of Kalph",
  },
  {
    icon: "question_answer",
    color: "text-blue-400",
    text: "What can Kalph do?",
  },
];

const chillSuggestions = [
  {
    icon: "emoji_emotions",
    color: "text-pink-400",
    text: "Tell me favorite sport of Kalph",
  },
  {
    icon: "music_note",
    color: "text-purple-400",
    text: "Favorite game of Kalph",
  },
];

const ChatSuggestions: React.FC<ChatSuggestionProps> = ({
  onSuggestionClick,
  persona, // Default to work persona
}) => {
  const [suggestions, setSuggestions] = React.useState(
    workSuggestions // Default to work suggestions
  );

  useEffect(() => {
    // Update suggestions based on persona
    if (persona === Persona.WORK) {
      setSuggestions(workSuggestions);
    } else {
      setSuggestions(chillSuggestions);
    }
  }, [persona]);

  return (
    <div className="flex flex-wrap gap-4 justify-center my-6">
      {suggestions.map((s, idx) => (
        <button
          key={idx}
          className="flex items-center gap-3 bg-[#23232b] hover:bg-[#343541] text-gray-100 rounded-xl px-5 py-4 shadow transition-colors border border-gray-700 min-w-[220px]"
          onClick={() => onSuggestionClick?.(s.text)}
          type="button"
        >
          <span
            className={`material-symbols-outlined text-3xl ${s.color}`}
            aria-hidden="true"
          >
            {s.icon}
          </span>
          <span className="text-base font-medium text-left">{s.text}</span>
        </button>
      ))}
    </div>
  );
};

export default ChatSuggestions;
