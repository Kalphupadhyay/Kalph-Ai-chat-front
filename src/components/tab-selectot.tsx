import React, { useState } from "react";
import { UploadBox } from "./upload-box";

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 text-base font-medium transition-all duration-200 ${
        isActive
          ? "text-white-600"
          : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
      } rounded-md`}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 animate-enter"></span>
      )}
    </button>
  );
};

interface TabContentProps {
  isActive: boolean;
  children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ isActive, children }) => {
  return (
    <div
      className={`transition-all duration-500 transform ${
        isActive
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-8 absolute"
      }`}
      style={{ display: isActive ? "block" : "none" }}
    >
      {children}
    </div>
  );
};

export const TabSelector: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Text form",
    },
    { label: "From URL" },
    { label: "Upload file" },
  ];

  const handleFileUpload = (files: File[]) => {
    console.log("Uploaded files:", files);
    // You can add additional logic here to handle the uploaded files
  };

  const handleSubmit = () => {
    switch (activeTab) {
      case 0:
        // Handle text form submission
        break;
      case 1:
        // Handle URL submission
        break;
      case 2:
        // Handle file upload submission
        break;
      default:
        break;
    }
  };

  const uploadFileToRag = (file: File) => {
    // Logic to upload the file to the server
    console.log("Uploading file to server:", file);
  };

  return (
    <div className="">
      {/* Tab Header */}
      <div className="flex justify-center  p-2">
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-3 relative overflow-hidden min-h-[200px]">
        {tabs.map((_, index) => (
          <TabContent key={index} isActive={activeTab === index}>
            <div className="space-y-2">
              {index === 0 && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="pt-4">
                    <p>Copy and paste your text you want to run llm on</p>
                    <p className="text-red-600">min 10 char*</p>
                    <textarea
                      className="w-full  p-2 border border-gray-700 rounded mt-6 min-h-14 max-h-40"
                      placeholder="Paste your text here..."
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Second Tab Content - Settings */}
              {index === 1 && (
                <div className="space-y-4 animate-fadeIn">
                  <p>Add links</p>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-700 rounded mt-2"
                    placeholder="https://example.com"
                  />
                </div>
              )}

              {/* Third Tab Content - Profile */}
              {index === 2 && (
                <div className="animate-fadeIn">
                  <UploadBox getUploadedFiles={handleFileUpload} />
                </div>
              )}
            </div>
          </TabContent>
        ))}
      </div>
    </div>
  );
};

export default TabSelector;
