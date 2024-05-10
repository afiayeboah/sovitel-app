import styled from "styled-components";

import { colors, properties } from "../../styles";



const Styles = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey1};
  border-color: ${colors.grey1};
  transition: ${properties.transition};
  overflow: hidden;
  &:focus-within {
    border-color: ${colors.primary};
  }
  &.disabled {
    background-color: ${colors.grey5};
  }
  &.error {
    border-color: ${colors.error};
  }
  input, select {
    padding: 16px 20px;
    width: 100%;
    &:disabled {
      background-color: ${colors.grey4};
    }
  }
`;

export default Styles;