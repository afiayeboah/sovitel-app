import {
  useNavigate, useLocation, Navigate, Outlet
} from "react-router-dom";
import axios from "axios";

import useAppActions from "../../redux/actions/app";
import { User } from "../../requests/users/types";
import { useAppModal } from "../AppModal/utils";
import { useAppState } from "../../redux/state";
import { paths } from "../../routes/paths";
import { ResponseCodes } from "../../types";
import { RootPage } from "..";
import Styles from "./styles";



export type AuthRouteContext = {
  user: User;
}

function AuthRoute() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setAppModal } = useAppModal();
  const { user, token } = useAppState();
  const { logoutUser } = useAppActions();

  /***************************************************************/
  /** Append these headers to authenticate all outgoing requests */
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  }

  /* ALL AUTHENTICATED NETWORK RESPONSES */
  axios.interceptors.response.use(
    (response: any) => response,
    (error) => {
      if (error && error.response) {
        const { status } = error.response;
        if (status === ResponseCodes.Unauthorized) {
          logoutUser();
          navigate(
            paths.SIGN_IN,
            { state: { previousPath: pathname } }
          );
        } else if (status === ResponseCodes.Forbidden) {
          setAppModal({
            title: "Error",
            children: (
              "Unfortunately you are not authorized to view this page"
            ),
          });
        }
      }
      return Promise.reject(error);
    }
  );



  return (
    <RootPage>
      {(token && user) ? (
        <Styles className="root-page">
          {/* Page Content */}
          <Outlet context={{ user }} />
        </Styles>
      ) : (
        <Navigate
          to={paths.SIGN_IN}
          state={{ previousPath: pathname }}
          replace
        />
      )}
    </RootPage>
  );
}

export default AuthRoute;