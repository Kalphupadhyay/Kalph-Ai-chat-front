import { createPortal } from "react-dom";
import "./modal.css";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const ModalContainer = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="">{children}</div>
        <div className="flex justify-end gap-5">
          <button onClick={onClose} className="cursor-pointer">
            Submit
          </button>
          <button className="cursor-pointer">Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};
