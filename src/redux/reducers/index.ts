import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import ActionTypes, { VoidAction } from "../actions";
import { TOKEN_STORAGE_KEY } from "../store";
import app, { AppState } from "./app";



export type RootState = {
  app: AppState,
};

const rootReducer = combineReducers({
  app,
});

const rootRootReducer = (state: any, action: VoidAction) => {
  if (action.type === ActionTypes.LOGOUT_USER) {
    storage.removeItem(`persist:${TOKEN_STORAGE_KEY}`);
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};


export default rootRootReducer;