import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      onClick={() => navigate("/")}
      className="bg-gray-800 text-white p-4 flex justify-between items-center cursor-pointer"
    >
      <h1 className="text-2xl font-bold">Persona AI</h1>
      <p>Powered by </p>
    </header>
  );
};
