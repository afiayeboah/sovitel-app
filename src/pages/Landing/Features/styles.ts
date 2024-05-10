import styled from "styled-components";

import bg_img from "../../../assets/raster-images/landing-page/bg/logo-art.png";
import { colors, functions, resolutions } from "../../../styles";



const Styles = styled.section`
  background-color: ${colors.grey3};
  background-image: url(${bg_img});
  background-size: 20%;
  padding: 8rem 2rem !important;
  padding-bottom: 10rem !important;
  @media(max-width: ${resolutions.tabletLarge}) {
    padding: 3rem 1rem !important;
    padding-bottom: 14rem !important;
  }
  .section-heading {
    .title {
      color: ${colors.white} !important;
    }
    .description {
      color: ${colors.grey1} !important;
    }
  }
  .feature-cards {
    gap: 2rem;
    .feature-card {
      width: 200px;
      height: 200px;
      padding: 2rem;
      border: 1px solid ${functions.rgba(colors.white, 0.1)};
      color: ${colors.white};
      text-align: center;
      font-size: 1.2rem;
      @media(max-width: ${resolutions.tablet}) {
        width: 130px;
        height: 130px;
      }
    }
  }
`;

export default Styles;