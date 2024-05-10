import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import rootRootReducer, { RootState } from "./reducers";



export const TOKEN_STORAGE_KEY = "sovitel";

const persistConfig = {
  key: TOKEN_STORAGE_KEY,
  storage,
}

const persistedReducer = persistReducer<RootState>
  (persistConfig, rootRootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER"
        ],
      },
    }),
});

export const persistor = persistStore(store);
