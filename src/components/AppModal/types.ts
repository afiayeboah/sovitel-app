import { ReactNode } from "react";



export type SetModalProps = {
  title: string;
  children: ReactNode;
  controls?: ReactNode | null;
  cancelCallback?: () => void;
}

export type ModalContextType = {
  modalProps: SetModalProps | null;
  setAppModal: (props: SetModalProps | null) => void;
  closeModal: (...args: any) => void;
}

export type ModalProviderProps = {
  children: ReactNode;
}