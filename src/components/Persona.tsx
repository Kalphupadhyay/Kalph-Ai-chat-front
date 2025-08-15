export const Persona: React.FC<{
  name: string;
  description: string;
  personaClick: () => void;
  image: string;
}> = ({ name, description, personaClick, image }) => {
  return (
    <div
      onClick={personaClick}
      className="persona-card p-4 border rounded-lg shadow-md flex cursor-pointer hover:shadow-lg transition-shadow duration-200"
    >
      <div className="img size-28 mr-4 rounded-lg overflow-auto">
        <img src={image} alt={name} className="w-full h-full" />
      </div>
      <div className="">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};
