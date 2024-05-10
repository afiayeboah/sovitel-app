import { useSelector } from "react-redux";

import { RootState } from "../reducers";



export const useAppState = () => (
  useSelector((state: RootState) => state.app)
);