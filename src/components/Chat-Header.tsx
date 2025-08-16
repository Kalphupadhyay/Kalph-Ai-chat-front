import { Link } from "react-router";
import { OnlineIcon } from "./Online";

export const ChatHeader: React.FC<{
  persona: string;
  image: string;
}> = ({ persona, image }) => {
  return (
    <div className="flex items-center p-4 gap-3  ">
      <Link className="h-6" to={`/`}>
        <span className="material-symbols-outlined cursor-pointer ">
          arrow_back
        </span>
      </Link>
      <div className="size-8 rounded-full overflow-auto">
        <img src={image} alt={persona} className="w-full h-full" />
      </div>
      <div className="">
        <h4>{persona}</h4>
        <OnlineIcon />
      </div>
    </div>
  );
};
