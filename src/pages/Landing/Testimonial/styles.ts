import styled from "styled-components";

import { colors, resolutions } from "../../../styles";



const Styles = styled.section`
  background-color: ${colors.primary};
  .page-wrapper {
    flex-direction: row;
    justify-content: center;
    margin-top: -12rem !important;
    padding-bottom: 6rem !important;
    gap: 0;
    width: fit-content;
    .main-content {
      background-color: #f9f5f0;
      padding: 3rem 2.5rem;
      .quote {
        text-decoration: underline;
        margin: 1rem 0;
        font-style: italic;
      }
      .manager {
        margin-top: 2rem;
        img {
          height: 50px;
          width: 50px;
          border-radius: 50%;
        }
      }
    }
    .cover-image {
      @media(max-width: ${resolutions.tabletLarge}) {
        display: none;
      }
      img {
        object-fit: cover;
      }
    }
  }
`;

export default Styles;