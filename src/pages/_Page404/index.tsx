import { Link } from "react-router-dom";

import { paths } from "../../routes/paths";
import { InfoPanel } from "../../components";
import Styles from "./styles";



function Page404() {
  return (
    <Styles className="root-page">
      <div className="root-content">
        <div className="page-wrapper centered">
          <InfoPanel
            title="Page Not Found"
            description={
              <div className="flex column">
                <div>
                  The Page you're looking for either does not exist.
                  <br />
                  Please check the URL properly and try again.
                </div>
                <div>
                  Alternatively, you can go back to the Homepage.
                </div>
              </div>
            }
          >
            <Link
              className="button"
              to={paths.HOMEPAGE}
            >
              Go Back Home
            </Link>
          </InfoPanel>
        </div>
      </div>
    </Styles>
  );
}


export default Page404;