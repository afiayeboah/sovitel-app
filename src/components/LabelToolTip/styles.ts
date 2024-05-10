import styled from "styled-components";

import { colors, snippets } from "../../styles";



const Styles = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  .title {
    font-size: 12px;
    font-weight: 600;
    color: ${colors.grey3}
  }
  button {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${colors.grey9};
    font-size: 8px;
    ${snippets.flexCenter};
    border: 1px solid transparent;
    &:focus {
      border-color: ${colors.primary};
    }
  }
`;

export default Styles;