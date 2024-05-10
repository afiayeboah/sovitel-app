export enum ActionTypes {
  /* AUTH */
  LOGOUT_USER = "LOGOUT_USER",
  SAVE_TOKEN = "SAVE_TOKEN",
  SAVE_USER = "SAVE_USER",

  /* UI */
  SET_HEADER_CONFIG = "SET_HEADER_CONFIG",
  SET_SIDEBAR_OPEN = "SET_SIDEBAR_OPEN",
  SET_LOADING = "SET_LOADING",

  /* MISSIONS */
  ADD_UPDATE_QUIZ = "ADD_QUIZ",
  DELETE_QUIZ = "DELETE_QUIZ",
  SET_QUIZZES = "SET_QUIZZES",
  SET_DESERTS = "SET_DESERTS",

  /* MISCELLANY */
  NEXT_PATH = "NEXT_PATH",
}

export default ActionTypes;


export interface VoidAction {
  type: string;
}
export interface StringAction {
  type: string;
  value: string;
}
export interface StringArrAction {
  type: string;
  value: string[];
}
export interface BooleanAction {
  type: string;
  value: boolean;
}
export interface VoidFuncAction {
  type: string;
  payload: () => void;
}

export type GenericAction =
  | VoidAction
  | StringAction
  | StringArrAction
  | BooleanAction
  | VoidFuncAction;
