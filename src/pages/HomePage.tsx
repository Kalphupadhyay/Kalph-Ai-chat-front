import { useNavigate } from "react-router";
import { Persona } from "../components/Persona";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // Handle persona selection
  const handlePersonaClick = (name: string) => {
    navigate(`/chat/${name}`);
  };

  return (
    <div className="container mx-auto px-4 mt-5">
      <h1 className="text-3xl font-bold mb-2 bold text-center">
        Chat with 2 versions of Kalph
      </h1>
      <p className="text-center mb-6">Start chatting by selecting a persona!</p>
      <div className="flex justify-center gap-4">
        <Persona
          image="/assets/kalph-work.jpg"
          personaClick={() => handlePersonaClick("kalph-work")}
          name="Workholic Kalph"
          description="This is workholic Kalph"
        />
        <Persona
          image="/assets/kalph-work.jpg"
          personaClick={() => handlePersonaClick("kalph-chill")}
          name="Chill Kalph"
          description="This is Outside work kalph"
        />
      </div>
    </div>
  );
};
