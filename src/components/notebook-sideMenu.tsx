export const NoteBookSideMenu = () => {
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

        <div className="pt-4">
          <p>Copy and paste your text you want to run llm on</p>
          <p className="text-red-600">min 10 char*</p>
          <textarea
            className="w-full  p-2 border border-gray-700 rounded mt-6 min-h-14 max-h-40"
            placeholder="Paste your text here..."
          ></textarea>
        </div>
        <div className="pt-5">
          <p>Add links</p>
          <input
            type="text"
            className="w-full p-2 border border-gray-700 rounded mt-2"
            placeholder="https://example.com"
          />
        </div>
        <div className="">
          <p className="mt-5 mb-2">Upload your files</p>
          <div className="h-28 border border-dashed border-gray-700  w-full grid place-items-center rounded">
            <div className="">
              <div className="text-center">
                <p className="material-symbols-outlined block text-center !text-3xl ">
                  upload
                </p>
              </div>
              <p className="text-center">Drag and drop your files here</p>
              <p className="text-center text-sm text-gray-600">
                or click to select files
              </p>
            </div>
          </div>

          <input
            type="file"
            className="w-full p-2 border border-gray-700 rounded mt-2 hidden"
            multiple
          />
        </div>
      </div>
    </div>
  );
};
