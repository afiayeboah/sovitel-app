import { Route, Navigate } from "react-router-dom";

import { RouteType } from "../types";



export const mapRoutes = (routes: RouteType[]) => (
  routes.map((route: RouteType, index) => {
    if (!route.redirect) {
      return (
        <Route
          {...route}
          key={`${route.path}-${index}`}
        />
      );
    }
    else {
      return (
        <Route
          key={index}
          path={route.path}
          element={<Navigate to={route.redirect} replace />}
        />
      );
    }
  })
);