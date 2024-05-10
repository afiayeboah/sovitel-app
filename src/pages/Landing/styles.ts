import styled from "styled-components";
import { colors, functions, resolutions } from "../../styles";



const Styles = styled.div`
  section {
    padding: 4rem 2rem;
    @media(max-width: ${resolutions.tabletLarge}) {
      padding: 2rem 1rem;
    }
    .page-wrapper {
      @media(max-width: ${resolutions.tablet}) {
        padding: 0;
      }
    }
    
    .section-heading {
      margin-bottom: 2rem;
      text-align: center;
      .title {
        font-weight: bold;
        font-size: 2rem;
        color: ${functions.colorLuminance(colors.primary, -0.4)};
      }
      .description {
        color: ${colors.grey3};
        font-size: 1.2rem;
        max-width: 700px;
        margin: 0 auto;
        margin-top: 0.5rem;
      }
    }

    .main-content {
      max-width: 500px;
      h4 {
        color: ${colors.primary};
        font-size: 1rem;
        font-weight: 400;
      }
      h2 {
        color: ${colors.grey3};
        font-size: 2rem;
        margin: 1rem 0;
        font-weight: 500;
      }
      .description {
        color: ${colors.grey3};
      }
      
    }
    .cover-image {
      height: 500px;
      width: 500px;
      background-size: cover;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
`;

export default Styles;