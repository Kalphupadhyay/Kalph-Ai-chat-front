import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      onClick={() => navigate("/")}
      className="bg-gray-800 text-white p-4 flex justify-between items-center cursor-pointer"
    >
      <h1 className="text-2xl font-bold">Chat with Kalph</h1>
      <div className="flex items-center gap-2">
        <p>Powered by Google Gemini </p>
        <img src="/gemini-color.svg" height={20} width={20} alt="" />
      </div>
    </header>
  );
};
