const hexToRgb = (hex: string) => {
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}
export const functions = {
  rgba: (hex: string, alpha: number) => {
    const color = hexToRgb(hex);
    if (color)
      return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
  },
  randomColor: () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
  colorLuminance: (hex: any, lum: number) => {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;
    // convert to decimal and change luminosity
    let rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }
    return rgb;
  }
}


export const colors = {
  primary: "#c19d68",
  secondary: "#E0883A",
  white: "#fff",
  black: "#000",
  // Shades of Grey
  grey1: "#DEDEDE",
  grey2: "#adadad",
  grey3: "#1e1e1e",
  grey4: "#F8F8F8",
  grey5: "#FAFAFA",
  grey6: "#767676",
  grey7: "#F3F3F3",
  grey8: "#E4E5E7",
  grey9: "#D9D9D9",
  grey10: "#F2F2F2",
  grey11: "#AAAAAA",
  grey12: "#D0D5DD",
  grey13: "#707070",
  grey15: "#FCFCFE",
  grey16: "#acacac",
  // Accent colors
  accent1: "#FFB200",
  accent2: "#18A45A",
  accent3: "#4339F2",
  accent4: "#074EE8",
  accent5: "#56B146",
  accent6: "#c98f12",
  accent7: "#B92C32",
  accent8: "#0062FF",
  accent9: "#B0783C",
  accent10: "#FFB71B",
  // Events
  error: "#C0433F",
  warning: "#E5C209",
  success: "#4cab5c",
}

export const resolutions = {
  desktop: "1919px",
  miniDesktop: "1300px",
  tabletLarge: "991px",
  tablet: "767px",
  phone: "574px",
  // Content Restriction
  maxContentWidth: "608px",
}

export const properties = {
  // Dimensions, Paddings, and Margins
  maxPageWidth: "1500px",
  maxFormWidth: "679px",
  maxFieldWidth: "400px",
  navHeight: "100px",
  sidebarWidth: "264px",

  // Effects
  boxShadow: `0px 2px 10px rgba(0, 0, 0, 0.1)`,
  transition: "150ms linear",
  borderRadius: "10px",
  lgBorderRadius: "7px",
  highestZIndex: "10001",
}

export const snippets = {
  // Position Absolute Centering
  absoluteCenter: `
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  `,
  // Display Flex Centering
  flexCenter: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  scrollBar: `
    ::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
    }
    ::-webkit-scrollbar-track {
      background-color: ${functions.rgba(colors.grey1, 0.5)};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${functions.rgba(colors.grey2, 0.8)};
      border-radius: 10px;
    }
  `,
  pseudoImg: `
    content: "";
    display: block;
    position: absolute;
  `,
}