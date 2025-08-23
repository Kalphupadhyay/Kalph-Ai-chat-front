interface LoadingBarProps {
  onComplete?: () => void;
  start?: boolean;
  // You can add props if needed
}

import { useEffect, useState } from "react";

export const LoadingBar = (props: LoadingBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    handleStart();
  }, []);

  const handleStart = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5; // Increment progress
      });
    }, 1000); // Update every 300ms
  };

  return (
    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-500 animate-loading"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default LoadingBar;
