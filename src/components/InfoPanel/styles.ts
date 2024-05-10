import styled from "styled-components";

import { snippets, colors, properties } from "../../styles";



const Styles = styled.div`
  ${snippets.flexCenter};
  max-width: ${properties.maxFieldWidth};
  flex: 1;
  .info-heading {
    margin-bottom: 2rem;
    img {
      width: 60px;
      margin-bottom: 2.5rem;
    }
    figcaption {
      text-align: center;
      color: ${colors.grey3};
      .title {
        font-size: 18px;
      }
      .description {
        margin-top: 1rem;
        line-height: 26px;
        font-weight: 500;
      }
    }
  }
  .info-content {
    ${snippets.flexCenter}
    width: 100%;
    gap: 30px;
  }
`;

export default Styles;