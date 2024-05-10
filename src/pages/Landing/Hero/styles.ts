import styled from "styled-components";

import img_1 from "../../../assets/raster-images/landing-page/carousel/00.png";
import {
  colors, functions, properties, resolutions, snippets
} from "../../../styles";



const Styles = styled.section`
  position: relative;
  height: 80vh;
  min-height: 500px;
  padding: 0 !important;
  background-image: url(${img_1});
  background-size: cover;
  display: flex;
  flex-direction: column;
  &::after {
    content: "";
    ${snippets.absoluteCenter};
    background-color: ${functions.rgba(colors.black, 0.3)};
    height: 100%;
    width: 100%;
  }

  .page-wrapper {
    position: relative;
    .text-content {
      ${snippets.absoluteCenter}
      z-index: 1;
      color: ${colors.white};
      gap: 1rem;
      text-align: center;
      h1 {
        font-size: 3rem;
        font-weight: 500;
        line-height: 4rem;
        margin-top: -5rem;
        -webkit-text-stroke: 0.3px ${functions.rgba(colors.black, 0.3)};
        @media(max-width: ${resolutions.tabletLarge}) {
          font-size: 2rem;
          line-height: initial;
          margin-top: -10rem;
        }
      }
    }
    .instant-booking {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 50%);
      z-index: ${properties.highestZIndex};
      border-top: 3px solid ${colors.primary};
      background-color: ${colors.grey3};
      padding: 2rem 3rem;
      margin: 0 auto;
      @media(max-width: ${resolutions.tablet}) {
        padding: 1.5rem;
        width: 85%;
      }
      form {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        gap: 1rem;
        @media(max-width: ${resolutions.tabletLarge}) {
          flex-wrap: wrap;
        }
        .field-column {
          min-width: 150px;
          margin-bottom: 0;
          .label-tooltip {
            .title {
              color: ${colors.white};
            }
          }
        }
      }
    }
  }
`;

export default Styles;