import { User } from "../../../requests/users/types";
import * as ac from "..";



export interface UserAction {
  type: string;
  user: User;
}

export type Action =
  | ac.GenericAction
  | UserAction;

export default Action;



/********/
/* AUTH */
export const saveToken = (value: string): ac.StringAction => ({
  type: ac.ActionTypes.SAVE_TOKEN,
  value
});

export const saveUser = (user: any): UserAction => ({
  type: ac.ActionTypes.SAVE_USER,
  user
});

export const logoutUser = (): ac.VoidAction => ({
  type: ac.ActionTypes.LOGOUT_USER
});


/******/
/* UI */
export const setAppLoading = (
  value: boolean | string
): ac.BooleanAction | ac.StringAction => ({
  type: ac.ActionTypes.SET_LOADING,
  value
});

export const setSidebarOpen = (
  value: boolean
): ac.BooleanAction => ({
  type: ac.ActionTypes.SET_SIDEBAR_OPEN,
  value
});


/**************/
/* MISCELLANY */
export const setNextPath = (path: string): ac.StringAction => ({
  type: ac.ActionTypes.NEXT_PATH,
  value: path
});