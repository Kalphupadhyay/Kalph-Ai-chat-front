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
        Welcome to the Persona Chat application
      </h1>
      <p className="mb-24 text-center">
        This is a Persona Chat application where you can interact with various
        personas. of Kalph upadhyay
      </p>
      <p className="text-center mb-6">Start chatting by selecting a persona!</p>
      <div className="flex justify-center gap-4">
        <Persona
          image="/assets/suit-work.jpg"
          personaClick={() => handlePersonaClick("kalph-work")}
          name="Kalph"
          description="This is workholic Kalph"
        />
        <Persona
          image="/assets/suit-work.jpg"
          personaClick={() => handlePersonaClick("kalph-chill")}
          name="Kalph"
          description="This is Outside work kalph"
        />
      </div>
    </div>
  );
};
