export const PersonaContainer: React.FC<{
  name: string;
  description: string;
  personaClick: () => void;
  image: string;
}> = ({ name, description, personaClick, image }) => {
  return (
    <div
      onClick={personaClick}
      className="persona-card p-5 border border-gray-300 rounded-lg shadow-md flex cursor-pointer 
      hover:shadow-xl transition-all duration-300 hover:border-blue-400 
      hover:bg-gradient-to-br 
      hover:-translate-y-1 hover:scale-105 transform"
    >
      <div className="img size-28 mr-4 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full  transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="transition-all duration-300">
        <h2 className="text-xl font-semibold hover:text-blue-600 transition-colors duration-300">
          {name}
        </h2>
        <div className="flex items-center gap-2 mb-2">
          <div className="size-2.5 bg-green-500 rounded-full animate-pulse"></div>
          <p>Online</p>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};
