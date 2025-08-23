import { useRef, useState } from "react";

interface UploadBoxProps {
  getUploadedFiles: (files: File[]) => void;
}

export const UploadBox = (props: UploadBoxProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  // Handle click on the div to trigger file input
  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const filesArray = Array.from(event.target.files);

      props.getUploadedFiles(filesArray);
      // You can add additional logic here to process files
    }
  };

  // Handle drag events
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const filesArray = Array.from(e.dataTransfer.files);

      props.getUploadedFiles(filesArray);
      // You can add additional logic here to process files
    }
  };

  return (
    <>
      <div className="">
        <p className="mt-5 mb-2">Upload your files</p>
        <div
          onClick={handleDivClick}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`h-38 border border-dashed ${
            dragActive ? "border-blue-500 " : "border-gray-700"
          }   w-full grid place-items-center rounded`}
        >
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
            <p className="text-sm text-gray-500 mt-2">
              Supported formats: PDF, DOCX, TXT. Max size: 10MB.
            </p>
          </div>
        </div>
      </div>
      <input
        onChange={handleFileChange}
        ref={fileInputRef}
        type="file"
        className="w-full p-2 border border-gray-700 rounded mt-2 hidden"
      />
      <div className=""></div>
    </>
  );
};
