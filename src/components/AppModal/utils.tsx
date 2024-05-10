import {
  createContext, useContext, useEffect, useState, useMemo
} from "react";

import {
  ModalContextType,
  SetModalProps,
  ModalProviderProps
} from "./types";



const defaultModal: ModalContextType = {
  modalProps: null,
  setAppModal: () => { },
  closeModal: () => { },
};

const ModalContext = createContext<ModalContextType>(defaultModal);

export const useAppModal = () => useContext(ModalContext);

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalProps, setModalProps] = useState<SetModalProps | null>(null);

  const setAppModal = (props: SetModalProps | null) => setModalProps(props)

  const closeModal = () => setModalProps(null);

  // Root page component
  const mainBody = useMemo(() => {
    return document.querySelector(".root-page")
  }, []);

  // Background Blur effect
  useEffect(() => {
    if (!mainBody) return;
    if (!(mainBody instanceof HTMLElement)) return;
    mainBody.style.filter = modalProps
      ? "blur(5px)"
      : "blur(0)";
  }, [mainBody, modalProps])



  return (
    <ModalContext.Provider
      value={{
        modalProps,
        setAppModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}