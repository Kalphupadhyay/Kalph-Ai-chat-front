import { useState } from "react";
import { ModalContainer } from "./modal/modal";
import TabSelector from "./tab-selectot";
import LoadingBar from "./loading-bar";

export const NoteBookSideMenu = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="w-[40%] px-4">
      <div className="">
        <h1 className="text-3xl font-bold mb-2 bold text-center mt-3">
          Notebook LLM
        </h1>
        <p className="text-center mb-6">
          upload your notes and chat with them. More to come soon!
        </p>
        <div className="border border-gray-700"></div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <p>Please select source to get started </p>
        <button onClick={toggleModal}>Select source</button>
      </div>
      <div className="">
        <LoadingBar />
      </div>

      {showModal && (
        <>
          <ModalContainer isOpen={showModal}>
            <TabSelector handleSubmit={toggleModal} />
          </ModalContainer>
        </>
      )}
    </div>
  );
};
