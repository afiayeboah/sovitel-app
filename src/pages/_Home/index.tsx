import { Navigate } from "react-router-dom";

import { paths } from "../../routes/paths";



function Home() {
  return (
    <Navigate
      replace
      to={paths.LANDING}
    />
  );
}

export default Home;