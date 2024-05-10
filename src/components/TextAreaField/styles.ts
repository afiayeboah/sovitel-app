import styled from "styled-components";

import TextFieldStyles from "../TextField/styles";



const Styles = styled(TextFieldStyles)`
  flex-direction: column;
  align-items: flex-end;
  &>* {
    padding: 16px 20px;
  }
  textarea {
    width: 100%;
    font-size: 14px;
    height: 65px;
    resize: none;
  }
  .max-length {
    font-size: 10px;
  }
`;

export default Styles;