import axios from "axios";

import useAppActions from "../../redux/actions/app";
import { ErrorResponse } from "../../types";
import { User } from "./types";




/*  ########################## */
/** ## USER NETWORK REQUESTS # */
/*  ########################## */
const useUsers = () => {
  const { saveUser } = useAppActions();


  /*************************************/
  /** Get the logged in User's Profile */
  const getMyProfile = () => {
    return new Promise<User>((resolve, reject) => {
      axios({
        url: `${process.env.REACT_APP_API_URL
          }/v2/users/my-profile`
      }).then((res: any) => {
        const user = res.data as User;
        resolve(user);
        saveUser(user);
      }).catch((error: any) => {
        reject(error as ErrorResponse);
      });
    });
  }



  return {
    getMyProfile
  }
}

export default useUsers;