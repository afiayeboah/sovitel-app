import styled from "styled-components";

import bg_img from "../../../assets/raster-images/landing-page/bg/logo-art.png";
import { colors, functions, resolutions } from "../../../styles";



const Styles = styled.section`
  padding-top: 10rem !important;
  padding-bottom: 4rem;
  background-color: ${functions.rgba(colors.primary, 0.1)};
  background-image: url(${bg_img});
  background-size: 25%;
  background-position: top;
  @media(max-width: ${resolutions.tabletLarge}) {
    padding-top: 15rem !important;
  }
  .cards {
    gap: 2rem;
    &>* {
      gap: 0;
    }
    .card {
      width: 350px;
      height: 400px;
      overflow: hidden;
      &:hover {
        .cover-image {
          img {
            transform: scale(1.2);
          }
        }
      }
      .cover-image {
        height: 60%;
        overflow: hidden;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          transition: transform 300ms ease-in-out
        }
      }
      .details {
        border: 1px solid ${colors.grey1};
        border-top: none;
        flex: 1;
        .primary {
          padding: 1rem;
          .title {
            font-size: 1.5rem;
            font-weight: 500;
            color: ${colors.grey3};
          }
          .description {
            margin-top: 0.5rem;
          }
        }
        .secondary {
          padding: 1rem;
          border-top: 1px solid ${colors.grey1};
          .rating {
            color: ${colors.primary}
          }
        }
      }
    }
  }
`;

export default Styles;