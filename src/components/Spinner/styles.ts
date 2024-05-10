import styled from "styled-components";

import { colors } from "../../styles";



const Styles = styled.div`
  padding: 1rem;
  margin: 1rem;
  .circle {
    border: 5px solid ${colors.grey9};
    border-radius: 50%;
    border-top-color: ${colors.primary};
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 500ms linear infinite;
    @-webkit-keyframes spin {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export default Styles;