import { Link } from "react-router";
import { Persona } from "../constants/enum/persona";

interface ChatSideMenuProps {
  persona: string;
}

export const ChatSideMenu = (props: ChatSideMenuProps) => {
  const getPersonaImage = (persona: string) => {
    switch (persona) {
      case "kalph-work":
        return "/assets/kalph-work.jpg";
      case "kalph-chill":
        return "/assets/kalph-chill.png";
    }
  };

  return (
    <aside className="h-full flex flex-col bg-zinc-900 border-r border-zinc-800 transition-all duration-300 ease-in-out w-64">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white">Personas</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Link
          to={`/chat/kalph-work`}
          className={`block p-4 hover:bg-zinc-800 transition-colors ${
            props.persona === Persona.WORK ? "bg-green-700" : ""
          } `}
        >
          <div className="bg-green flex gap-2 items-center">
            <div className="size-8 rounded-full overflow-auto ">
              <img
                src={getPersonaImage("kalph-work")}
                alt="profile"
                className="w-full h-full"
              />
            </div>
            <div className="">
              <h4 className="text-white text-lg">Kalph work</h4>
              <p className="text-gray-400 text-xm">click to chat</p>
            </div>
          </div>
        </Link>
        <Link
          to={`/chat/kalph-chill`}
          className={`block p-4 hover:bg-zinc-800 transition-colors ${
            props.persona === Persona.CHILL ? "bg-green-700" : ""
          } `}
        >
          <div className=" flex gap-2 items-center">
            <div className="size-8 rounded-full bg-amber-950"></div>
            <div className="">
              <h4 className="text-white text-lg">Kalph chill</h4>
              <p className={`text-gray-400 text-xm`}>click to chat</p>
            </div>
          </div>
        </Link>
      </div>
    </aside>
  );
};
