import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { AuthRoute, NonAuthRoute, ScrollToTop } from "./components";
import { ModalProvider } from "./components/AppModal/utils";
import { authRoutes, nonAuthRoutes } from "./routes";
import { store, persistor } from "./redux/store";
import GlobalStyles from "./styles/GlobalStyles";
import { paths } from "./routes/paths";
import { mapRoutes } from "./routes/utils";

import {
  Home,
  Page404,
} from "./pages";



function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ModalProvider>
          <Router>
            <ScrollToTop />
            <GlobalStyles />
            <Routes>
              <Route path={paths.HOMEPAGE} element={<Home />} />
              {/* AUTHENTICATED ROUTES */}
              <Route element={<AuthRoute />}>
                {/* Root Routes */}
                {mapRoutes(authRoutes)}
              </Route>

              {/* NON-AUTHENTICATED ROUTES */}
              <Route element={<NonAuthRoute />}>
                {mapRoutes(nonAuthRoutes)}
              </Route>

              {/* Page Not Found */}
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Router>
        </ModalProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;