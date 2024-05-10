import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { User } from "../../../requests/users/types";
import * as actions from "./types";



const useAppActions = () => {
  const dispatch: Dispatch<actions.Action> = useDispatch();


  /********/
  /* AUTH */
  const saveToken = (token: string) =>
    dispatch(actions.saveToken(token));

  const saveUser = (user: User) =>
    dispatch(actions.saveUser(user));

  const logoutUser = () =>
    dispatch(actions.logoutUser());


  /******/
  /* UI */
  const setAppLoading = (value: boolean | string) =>
    dispatch(actions.setAppLoading(value));

  const setSidebarOpen = (value: boolean) =>
    dispatch(actions.setSidebarOpen(value));


  /**************/
  /* MISCELLANY */
  const setNextPath = (path: string) =>
    dispatch(actions.setNextPath(path));


  return {
    saveToken,
    saveUser,
    logoutUser,

    setAppLoading,
    setSidebarOpen,

    setNextPath,
  }
}

export default useAppActions;
