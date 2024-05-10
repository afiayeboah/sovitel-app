import styled from "styled-components";

import { colors, functions, properties, snippets } from "../../styles";



const Styles = styled.div`
  z-index: ${properties.highestZIndex};
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  .modal-overlay {
    background-color: ${functions.rgba(colors.black, 0.8)};
    width: 100%;
    height: 100%;
    ${snippets.flexCenter}
    .modal-container {
      background-color: ${colors.white};
      width: 420px;
      max-width: 80vw;
      margin: 0;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04);
      ${snippets.scrollBar}
      &>* {
        width: 100%;
      }

      ${'' /* Modal Header */}
      .modal-header {
        margin-bottom: 1rem;
        .head-title {
          font-size: 1.5rem;
        }
        .close-icon {
          margin-left: 1rem;
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }
      }

      ${'' /* Modal Content */}
      .modal-content {
        font-size: 14px;
        overflow-y: auto;
      }

      ${'' /* Modal Controls */}
      .modal-controls {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 3rem;
        gap: 1rem;
      }
    }
  }
`;

export default Styles;