import styled from "styled-components";

import { colors, properties, snippets } from "../../styles";



const Styles = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  ${snippets.flexCenter}
  z-index: ${properties.highestZIndex};
  background-color: ${colors.white};
  .load-message {
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    color: ${colors.grey3}
  }
  &.app-loader {
    ${snippets.absoluteCenter};
  }
`;

export default Styles;