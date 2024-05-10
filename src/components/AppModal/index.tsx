import { MouseEvent, useCallback, useEffect, useRef } from "react";

import { SetModalProps } from "./types";
import { useAppModal } from "./utils";
import Styles from "./styles";



function AppModal({
  title,
  controls,
  children,
  cancelCallback,
}: SetModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModal: closeAppModal } = useAppModal();


  /****************/
  /** Close Modal */
  const closeModal = useCallback((e?: MouseEvent) => {
    if (e) e.preventDefault();
    closeAppModal();
    if (cancelCallback)
      cancelCallback();
  }, [cancelCallback, closeAppModal])


  // Effect for closing modal on outside click
  useEffect(() => {
    const handleOutsideClick: EventListener = (event) => {
      const mouseEvent = event as any;
      const target = mouseEvent.target as Node;
      if (modalRef.current && !modalRef.current.contains(target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [closeModal]);


  // Effect for closing modal on Escape key press
  useEffect(() => {
    // Use KeyboardEvent type here
    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscapePress);

    return () => document.removeEventListener("keydown", handleEscapePress);
  }, [closeModal]);



  return (
    children ? (
      <Styles className="root-modal">
        <div className="modal-overlay">
          <div className="modal-container" ref={modalRef}>
            {/* Modal Header */}
            <div className="modal-header flex justify-between">
              <h1 className="head-title">{title}</h1>
              <button
                className="close-icon"
                onClick={closeModal}
                type="button"
              >
                x
              </button>
            </div>

            {/* Modal Content */}
            {(typeof children === "string") ? (
              <div className="modal-content">
                {children}
              </div>
            ) : children}

            {/*  Modal Controls */}
            {controls ? (
              controls
            ) : (
              <div className="modal-controls">
                <button
                  className="button"
                  onClick={closeModal}
                >
                  Ok
                </button>
              </div>
            )}
          </div>
        </div>
      </Styles>
    ) : null
  );
}

export default AppModal;