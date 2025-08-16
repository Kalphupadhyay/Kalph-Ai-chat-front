import React from "react";

// Make sure you have Material Symbols font loaded in your index.html or _app.tsx:
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

interface ChatSuggestionProps {
  onSuggestionClick?: (suggestion: string) => void;
}

const suggestions = [
  {
    icon: "lightbulb",
    color: "text-yellow-400",
    text: "Give me a productivity tip",
  },
  {
    icon: "question_answer",
    color: "text-blue-400",
    text: "Explain a complex topic simply",
  },
  {
    icon: "psychology",
    color: "text-purple-400",
    text: "Motivate me for my next task",
  },
  {
    icon: "code",
    color: "text-green-400",
    text: "Help me debug my code",
  },
];

const ChatSuggestions: React.FC<ChatSuggestionProps> = ({
  onSuggestionClick,
}) => {
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
