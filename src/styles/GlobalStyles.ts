import { createGlobalStyle } from "styled-components";

import { properties, colors, functions, snippets, resolutions } from ".";



const GlobalStyles = createGlobalStyle`
  ${''/* ################# */}  
  ${''/* # ROOT ELEMENTS # */}
  ${''/* ################# */}
  *, *::before, *::after {
    font-family: "Cormorant Garamond", serif;
    font-weight: 300;
    font-size: 16px;
    font-optical-sizing: auto;
    font-style: normal;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  html {
    height: 100%;
  }
  html, body {
    min-height: 100vh;
  }
  body {
    max-width: 100%;
    position: relative;
    overflow-x: hidden;
  }
  body, h1, h2, h3, h4, h5, h6, p, figure {
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
  div, li, p, ul, ol, span {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }
  ol, ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  figure {
    text-align: center;
    figcaption {
      text-align: left;
    }
  }
  img {
    object-position: center;
    object-fit: contain;
    vertical-align: middle;
    user-select: none;
  }
  a {
    outline: none;
    text-decoration: none;
    &:hover{
      text-decoration: none;
    }
  }
  ${''/* FORM ELEMENTS */}
  form {
    width: 100%;
    max-width: ${properties.maxFormWidth};
  }
  input, button, textarea, select {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
  }
  input, textarea {
    font-size: 1rem;
    &:focus, &:hover {
      outline: none;
    }
    &::placeholder {
      color: ${colors.grey2};
    }
  }
  button {
    cursor: pointer;
    user-select: none;
  }


  ${''/* ########### */}
  ${''/* # CLASSES # */}
  ${''/* ########### */}
  ${'' /* Top-Level Page Component */}
  .root-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${colors.white};
    position: relative;
  }

  ${'' /* Primary Header */}
  .root-header {
    background-color: ${colors.white};
    position: sticky;
    top: 0;
    z-index: ${properties.highestZIndex};
    .header-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
      height: ${properties.navHeight};
      max-width: ${properties.maxPageWidth};
      width: 100%;
      margin: 0 auto;
      @media(max-width: ${resolutions.tabletLarge}) {
        height: auto;
        padding: 1rem;
      }
      #logo {
        width: 85px;
      }
      .sidebar-toggle {
        display: none;
        @media(max-width: ${resolutions.tabletLarge}) {
          display: block;
          height: 1.5rem;
          width: 1.5rem;
        }
      }
      .user-avatar {
        .details {
          @media(max-width: ${resolutions.tabletLarge}) {
            display: none;
          }
        }
      }
    }
  }

  ${'' /* Page Content (Differs per path) */}
  .root-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${colors.white};
    .page-wrapper {
      padding: 2rem;
      flex: 1;
      max-width: ${properties.maxPageWidth};
      width: 100%;
      margin: 0 auto;
      @media(max-width: ${resolutions.tabletLarge}) {
        padding: 1rem;
      }
      &.field-width {
        max-width: ${properties.maxFieldWidth};
      }
      &.centered {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }

  header, .heading {
    margin-bottom: 2rem;
    .title {
      font-size: 24px;
      font-weight: 700;
    }
    .description {
      margin-top: 0.5rem;
    }
  }

  .heading {
    .title {
      font-size: 1.2rem;
    }
  }

 

  ${'' /* DISPLAY FLEX */}
  .flex {
    display: flex;
    gap: 7px;
    &.column {
      flex-direction: column;
    }
    &.wrap {
      flex-wrap: wrap;
    }
    &.inline {
      display: inline-flex;
    }
    
    ${'' /* (Row) Main & Cross Axes */}
    &.flex-start {
      justify-content: flex-start;
      align-items: flex-start;  
    }
    &.center {
      justify-content: center;
      align-items: center;
    }
    &.flex-end {
      justify-content: flex-end;
      align-items: flex-end;
    }
    ${'' /* (Row) Main Axis */}
    &.justify-start {
      justify-content: flex-start;
    }
    &.justify-center {
      justify-content: center;
    }
    &.justify-end {
      justify-content: flex-end;
    }
    &.justify-between {
      justify-content: space-between;
    }
    ${'' /* (Row) Cross Axis */}
    &.align-start {
      align-items: flex-start;
    }
    &.align-center {
      align-items: center;
    }
    &.align-end {
      align-items: flex-end;
    }
    &.align-between {
      align-items: space-between;
    }
  }
  .flex-fill {
    flex: 1;
  }

  .grid-list {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    .grid-item {
      display: block;
      color: ${colors.black};
      padding: 1rem;
      width: 100%;
      text-align: left;
      background-color: ${colors.white};
      border-left: 3px solid ${colors.primary};
    }
  }

  ${'' /* MARGINS */}
  .mt-auto {
    margin-top: auto;
  }
  .ml-auto {
    margin-left: auto;
  }
  .mlr-auto {
    margin: 0 auto;
  }
  .mt-1 {
    margin-top: 1rem;
  }
  .mt-2 {
    margin-top: 2em;
  }
  .mb-1 {
    margin-bottom: 1rem;
  }
  .mb-2 {
    margin-bottom: 2rem;
  }
  .mg-auto {
    margin: auto;
  }

  ${'' /* TEXT */}
  .al-left {
    text-align: left !important;
  }
  .al-right {
    text-align: right !important;
  }
  .al-center {
    text-align: center !important;
  }
  .bold {
    font-weight: 700;
  }
  .semi-bold {
    font-weight: 600;
  }
  .grey-text {
    color: ${colors.grey6};
  }

  .link {
    display: inline-block;
    max-width: fit-content;
    position: relative;
    color: ${colors.primary};
    padding-bottom: 1px;
    font-size: inherit;
    &.underline {
      text-decoration: underline;
    }
    &:hover, &:focus {
      color: ${colors.primary};
      text-decoration: underline;
    }
    &.black {
      color: ${colors.grey3};
    }
    &.blue {
      color: ${colors.accent4};
    }
    &.error {
      color: ${colors.error};
    }
    &.grey {
      color: ${colors.grey6};
    }
    &.inherit {
      color: inherit;
    }
  }

  .btn-image {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 20px;
    }
  }
 
  ${''/* FORM CLASSES */}
  .field-column {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 1rem;
    min-width: 200px;
    &>* {
      width: initial;
    }
  }
  
  .field-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
    &>* {
      flex: 1;
    }
  }

  .button {
    white-space: nowrap;
    user-select: none;
    width: 100%;
    max-width: ${properties.maxFieldWidth};
    color: ${colors.white};
    background-color: ${colors.primary};
    border: 1px solid ${colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px 35px;
    font-weight: 600;
    transition: ${properties.transition};
    &>* {
      color: inherit;
      font-weight: inherit;
      font-size: inherit;
    }
    img {
      width: 16px;
    }
    &.sm {
      padding: 5px 11px;
      width: auto;
      font-size: 12px;
    }
    &.submit {
      margin-top: 19px;
    }
    &.auto-width {
      width: auto;
    }
    &.fit-content {
      width: fit-content;
    }
    &.white-black {
      color: ${colors.black};
      background-color: ${colors.white};
      border-color: ${colors.black};
      &.grey-bd {
        border-color: ${colors.grey12};
      }
    }
    &.black {
      color: ${colors.white};
      background-color: ${colors.black};
      border-color: ${colors.black};
    }
    &.white-primary {
      color: ${colors.primary};
      background-color: ${colors.white};
      border-color: ${colors.primary};
    }
    &.transparent {
      color: ${colors.grey6};
      border: none;
      background-color: transparent;
      padding: 0;
      font-size: 12px;
      width: fit-content;
      &:disabled {
        background-color: transparent;
        opacity: 0.5;
      }
    }
    &.full-width {
      width: 100%;
      max-width: unset;
    }
    &.error {
      color: ${colors.white};
      background-color: ${colors.error};
      border-color: ${colors.error};
    }
    &.sync {
      width: 85px;
      justify-content: left;
    }
    ${''/* Pseudo classes (Keep at the bottom for specificity) */}
    &:hover, &:focus {
      cursor: ponter;
    }
    &:disabled {
      color: ${colors.grey11};
      background-color: ${colors.grey9};
      border-color: ${colors.grey9};
      cursor: default;
    }
  }

  .icon-button {
    height: fit-content;
    width: fit-content;
  }

  .validation-msg {
    font-size: 0.7rem;
    background-color: ${functions.rgba(colors.error, 0.1)};
    color: ${colors.error};
    padding: 7px 10px;
    border-radius: 5px;
  }

  .avatar-placeholder {
    user-select: none;
    flex-shrink: 0;
    text-transform: uppercase;
    height: 48px;
    width: 48px;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 50%;
    background-color: ${colors.accent8};
    ${snippets.flexCenter}
    font-weight: 600;
  }
`;

export default GlobalStyles;