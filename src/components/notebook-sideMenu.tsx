import { useState, useTransition } from "react";
import { ModalContainer } from "./modal/modal";
import TabSelector from "./tab-selectot";
import LoadingBar from "./loading-bar";
import { uploadFile } from "../config/axiosMethods";

export const NoteBookSideMenu = () => {
  const [showModal, setShowModal] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (data: File | string) => {
    console.log("Submitted data:", data);

    setShowProgress(true);
    // Handle submission logic here
    toggleModal();

    startTransition(async () => {
      try {
        const response = await uploadFile("/notebook-file", data as File);
        console.log("Upload response:", response);
        if (response.status === 200) {
          setIsSuccess(true);
          setShowProgress(false);
        }
      } catch (error) {
        setIsSuccess(false);
        console.log(error);
      }
    });
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
        <button className="bg-blue-950 p-2 rounded" onClick={toggleModal}>
          Select source
        </button>
      </div>

      {showProgress && (
        <div className="">
          <LoadingBar isComplete={isSuccess} />
        </div>
      )}

      {isSuccess && (
        <div className="text-green-600 text-center mt-4">
          File Parsed successfully!
        </div>
      )}

      {showModal && (
        <>
          <ModalContainer isOpen={showModal}>
            <TabSelector
              handleClose={() => setShowModal(false)}
              handleSubmit={handleSubmit}
            />
          </ModalContainer>
        </>
      )}
    </div>
  );
};
