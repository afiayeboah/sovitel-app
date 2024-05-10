import { paths } from "../../routes/paths";
import Styles from "./styles";



function SovitelLogo() {
  return (
    <Styles
      to={paths.HOMEPAGE}
      className="sovitel-logo"
    >
      SOVITEL
    </Styles>
  );
}

export default SovitelLogo;