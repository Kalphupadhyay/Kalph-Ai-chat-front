import { useNavigate } from "react-router";
import { PersonaContainer } from "../components/PersonaContainer";
import { Footer } from "../components/footer";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  // Handle persona selection
  const handlePersonaClick = (name: string) => {
    navigate(`/chat/${name}`);
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <div className="container h-full mx-auto px-4 mt-5 flex-1">
        <h1 className="text-3xl font-bold mb-2 bold text-center">
          Chat with 2 versions of Kalph
        </h1>
        <p className="text-center mb-6">
          Start chatting by selecting a persona!
        </p>
        <div className="flex justify-center gap-4 flex-col md:flex-row">
          <PersonaContainer
            image="/assets/kalph-work.jpg"
            personaClick={() => handlePersonaClick("kalph-work")}
            name="Workholic Kalph"
            description="This is workholic Kalph"
          />
          <PersonaContainer
            image="/assets/kalph-chill.png"
            personaClick={() => handlePersonaClick("kalph-chill")}
            name="Chill Kalph"
            description="This is Outside work kalph"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
