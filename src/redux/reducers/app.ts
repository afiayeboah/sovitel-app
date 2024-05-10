import * as appActions from "../actions/app/types";
import { User } from "../../requests/users/types";
import * as ac from "../actions";



export type AppState = {
  token: string;
  user: User | null;
  appLoading: boolean | string;
  nextPath: string;
  sidebarOpen: boolean;
}

const initialState: AppState = {
  token: "",
  user: null,
  appLoading: false,
  nextPath: "",
  sidebarOpen: false
}

const appReducer = (
  state: AppState = initialState,
  action: appActions.Action
): AppState => {
  switch (action.type) {
    /********/
    /* AUTH */
    case ac.ActionTypes.SAVE_TOKEN:
      const token = (action as ac.StringAction).value;
      return {
        ...state,
        token
      };
    case ac.ActionTypes.SAVE_USER:
      const user = (action as appActions.UserAction).user;
      return {
        ...state,
        user
      };
    case ac.ActionTypes.LOGOUT_USER:
      return initialState;

    /******/
    /* UI */
    case ac.ActionTypes.SET_LOADING:
      const appLoading = (action as ac.BooleanAction | ac.StringAction).value;
      return {
        ...state,
        appLoading
      };
    case ac.ActionTypes.SET_SIDEBAR_OPEN:
      const sidebarOpen = (action as ac.BooleanAction).value;
      return {
        ...state,
        sidebarOpen
      };

    /**************/
    /* MISCELLANY */
    case ac.ActionTypes.NEXT_PATH:
      const nextPath = (action as ac.StringAction).value;
      return {
        ...state,
        nextPath
      };
    default:
      return state;
  }
};

export default appReducer;