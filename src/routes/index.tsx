import { RouteType } from "../types";
import { Landing } from "../pages";
import { paths } from "./paths";



export const authRoutes: RouteType[] = [

]

export const nonAuthRoutes: RouteType[] = [
  {
    path: paths.LANDING,
    element: <Landing />
  }
]