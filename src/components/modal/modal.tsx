import { createPortal } from "react-dom";
import "./modal.css";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export const ModalContainer = ({ children, isOpen }: ModalProps) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="">{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};
