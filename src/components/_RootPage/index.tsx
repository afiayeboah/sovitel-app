import { PropsWithChildren, useEffect } from "react";
import axios from "axios";

import useAppActions from "../../redux/actions/app";
import { useAppModal } from "../AppModal/utils";
import { useAppState } from "../../redux/state";
import { AppModal, Loader } from "..";



function RootPage({
  children
}: PropsWithChildren) {
  const { appLoading } = useAppState();
  const { setAppLoading } = useAppActions();
  const { modalProps, setAppModal } = useAppModal();


  /** ALL AUTHENTICATED NETWORK RESPONSES */
  axios.interceptors.response.use(
    (response: any) => response,
    (error) => {
      const defaultMsg = "There was an unexpected error. Please try again later";
      let message: any = defaultMsg;
      let status: any = 400;
      if (error.response) {
        const { data, status: sts } = error.response;
        status = sts;
        if (Array.isArray(data)) message = data[0];
        else if (typeof data === "object") {
          const objMsg = Object.values(data)[0];
          if (Array.isArray(objMsg)) message = objMsg[0];
          else message = objMsg;
        }
        else message = data;
      } else {
        const { message: msg, status: sts } = error;
        status = sts;
        if (Array.isArray(msg)) message = msg[0];
        else if (typeof msg === "object") message = Object.values(msg)[0];
        else message = msg;
      }
      // Prevent displaying XML. Show generic error instead.
      // Catches server-side errors - 5xx
      if (
        (status?.toString().startsWith("5")) ||
        (message?.toString().toLowerCase().startsWith("<!doctype html>".toLowerCase()))
      ) {
        message = defaultMsg;
      }
      setAppModal({
        title: "Error",
        children: (
          <div
            className="modal-content"
            style={{ whiteSpace: "pre-line" }}
          >
            {message}
          </div>
        ),
        cancelCallback: () => {
          setAppModal(null);
        }
      });

      return Promise.reject({ message, status });
    }
  );


  useEffect(() => {
    /*
        Reset global UI components on first render
        to avoid blocking the screen
      */
    setAppLoading(false);
    setAppModal(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <>
      {/* App Loader */}
      {appLoading ? (
        <Loader
          className="app-loader"
          message={
            (typeof appLoading === "string")
              ? appLoading
              : undefined
          } />
      ) : null}

      {modalProps ? (
        <AppModal {...modalProps} />
      ) : null}
      {/* Page Content (Differs per path) */}
      {children}
    </>
  )
}

export default RootPage;