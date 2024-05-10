import styled from "styled-components";

import TextFieldStyles from "../TextField/styles";
import { colors, functions } from "../../styles";



const Styles = styled(TextFieldStyles)`
  position: relative;
  input {
    padding-right: 2rem;
  }
  .toggle-view {
    position: absolute;
    right: 0.5rem;
    top: 1.8rem;
    transform: translateY(-50%);
    width: 1.4rem;
    cursor: pointer;
  }
  .strength {
    font-size: 0.7rem;
    padding: 7px 10px;
    border-radius: 5px;
    &.Strong {
      color: ${colors.success};
      background-color: ${functions.rgba(colors.success, 0.1)};
    }
    &.Medium {
      color: ${colors.warning};
      background-color: ${functions.rgba(colors.warning, 0.1)};
    }
    &.Poor {
      color: ${colors.error};
      background-color: ${functions.rgba(colors.error, 0.1)};
    }
  }
`;

export default Styles;