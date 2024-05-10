import styled from "styled-components";

import TextFieldStyles from "../TextField/styles";
import { colors } from "../../styles";



const Styles = styled(TextFieldStyles)`
  padding: 0 20px;
  background-color: ${colors.grey15};
  .icon {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
  select {
    width: 100%;
    padding: 16px 0;
  }
`;

export default Styles;