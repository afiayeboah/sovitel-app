import styled from "styled-components";
import { colors, properties } from "../../styles";



const Styles = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  ${'' /* Header */}
  header.non-auth-header {
    margin: 0;
    background-color: ${colors.grey3};
    border-bottom: 3px solid ${colors.primary};
    .header-wrapper {
      padding: 1.5rem 2rem;
      text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
      max-width: ${properties.maxPageWidth};
      margin: 0 auto;
      nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        .nav-link {
          display: block;
          color: ${colors.white};
        }
      }
    }
  }

  ${'' /* Footer */}
  footer.app-footer {
    background-color: ${colors.grey3};
    color: ${colors.grey16};
    font-weight: 600;
    font-size: 1.1rem;
    .footer-wrapper {
      max-width: ${properties.maxPageWidth};
      margin: 0 auto;
      color: ${colors.grey16};
      h3.title {
        color: ${colors.white};
        font-size: 1.5rem;
        font-weight: 500;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
        position: relative;
        &::after {
          content: "";
          height: 2px;
          width: 20px;
          background-color: ${colors.primary};
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
      .address {
        position: relative;
        background-color: #272727;
        padding: 3rem 2rem;
        margin-top: -5rem;
        padding-right: 7rem;
        .restaurant-name {
          font-weight: 700;
          font-size: 1.2rem;
          color: ${colors.primary};
          margin-bottom: 3rem;
        }
        ul {
          gap: 1rem;
          li {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            svg {
              color: ${colors.primary};
            }
          }
        }
        .socials {
          margin-top: 2rem;
          a {
            width: 40px;
            height: 40px;
            color: ${colors.grey16};
            svg {
              height: 100%;
              width: 100%;
              text-align: center;
              fill: currentColor;
            }
          }
        }
      }
      .main-block {
        padding: 2rem;
        padding-top: 6rem;
        gap: 3rem;
        .useful-links {
          ul {
            gap: 1rem;
            .footer-link {
              color: ${colors.grey16};
              font-weight: 600;
              font-size: 1.1rem;
            }
          }
        }
        .gallery {
          ul {
            gap: 1rem;
            max-width: 300px;
            img {
              height: 85px;
              width: 85px;
              object-fit: cover;
            }
          }
        }
      }
    }
    .copyright {
      background-color: #161616;
      padding: 1rem;
      text-align: center;
      color: ${colors.grey16};
      font-weight: 600;
    }
  }
`;

export default Styles;