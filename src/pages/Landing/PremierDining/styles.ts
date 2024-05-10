import styled from "styled-components";
import { colors, resolutions } from "../../../styles";



const Styles = styled.section`
  .page-wrapper {
    gap: 2rem;
    .main-content {
      .stats {
        margin-top: 2rem;
        gap: 4rem;
        border-bottom: 1px solid ${colors.grey1};
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        .stat {
          gap: 1rem;
          @media(max-width: ${resolutions.tablet}) {
            gap: 0.5rem;
            .value {
              font-size: 2.5rem !important;
            }
          }
          .value {
            font-size: 4rem;
            color: ${colors.primary};
            font-weight: 500;
          }
          .title {
            color: ${colors.grey3};
          }
        }
      }
    }
  }
`;

export default Styles;