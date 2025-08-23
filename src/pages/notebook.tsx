import { ChatHeader } from "../components/Chat-Header";
import { NoteBookSideMenu } from "../components/notebook-sideMenu";

export const NotebookPage = () => {
  return (
    <div className="flex h-screen">
      <NoteBookSideMenu />
      <div className="chat-window w-full bg-gray-950">
        <ChatHeader image="/public/assets/kalph-chill.png" persona="AI" />
      </div>
    </div>
  );
};

export default NotebookPage;
