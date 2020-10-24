/*!

 =========================================================
 * NextJS Material Kit - v1.1.0 based on Material Kit - v2.0.2 and Material Kit React - v1.8.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/nextjs-material-kit
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

export function ThinGrayLine() {
  return (
    <hr
      style={{
        color: grayColor,
        height: 0.2,
        opacity: 0.4,
        width: "300px",
      }}
    />
  );
}

const hexColorToRGB = function (hexColor) {
  let detectShorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; // #000 vs #000000
  hexColor = hexColor.replace(detectShorthand, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const hex_array = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor); // #000000 to #ffffff
  return hex_array
    ? {
        r: parseInt(hex_array[1], 16), // 0-255
        g: parseInt(hex_array[2], 16), // 0-255
        b: parseInt(hex_array[3], 16), // 0-255
      }
    : null;
};

const hexToRGBAlpha = function (hexColor, alpha) {
  let rgb = hexColorToRGB(hexColor);
  return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
};

const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
};

const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
};

const boxShadow = {
  boxShadow:
    "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
};

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff",
};

const defaultFont = {
  headerFontFamily: "Roboto Slab",
  accentFontFamily: "Lato",
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
};

export const primaryColor = "#00b0ff";
export const lightPrimaryColor = "#e3f2fd";
export const warningColor = "#ff9800";
export const dangerColor = "#f44336";
export const successColor = "#4caf50";
export const infoColor = "#00acc1";
export const roseColor = "#ed5458"; 
export const grayColor = "#555555";
export const lightGrayColor = "#757575";
export const nearBlackColor = "#3C4858";
export const logoBlue = "#1886E4";
export const logoRed = "#F4174F"

const primaryBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
    primaryColor,
    0.28
  )}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
    primaryColor,
    0.2
  )}`,
};
const infoBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
    infoColor,
    0.28
  )}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
    infoColor,
    0.2
  )}`,
};
const successBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
    successColor,
    0.28
  )}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
    successColor,
    0.2
  )}`,
};
const warningBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
    warningColor,
    0.28
  )}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
    warningColor,
    0.2
  )}`,
};
const dangerBoxShadow = {
  boxShadow: `0 12px 20px -10px ${hexToRGBAlpha(
    dangerColor,
    0.28
  )}, 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ${hexToRGBAlpha(
    dangerColor,
    0.2
  )}`,
};
const roseBoxShadow = {
  boxShadow: `0 4px 20px 0px ${hexToRGBAlpha(
    "#000",
    0.14
  )}, 0 7px 10px -5px ${hexToRGBAlpha(roseColor, 0.4)}`,
};

const warningCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, #fb8c00)",
  ...warningBoxShadow,
};
const successCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, #43a047)",
  ...successBoxShadow,
};
const dangerCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, #e53935)",
  ...dangerBoxShadow,
};
const infoCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #26c6da, #00acc1)",
  ...infoBoxShadow,
};
const primaryCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
  ...primaryBoxShadow,
};
const roseCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ec407a, #d81b60)",
  ...roseBoxShadow,
};
const cardActions = {
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto",
  ...defaultFont,
};

const cardHeader = {
  margin: "-30px 15px 0",
  borderRadius: "3px",
  padding: "15px",
};

const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow:
    "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s",
};

const container = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px",
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px",
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px",
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px",
  },
  zIndex: "12",
};

export const section = {
  padding: "2rem 0 2rem",
  textAlign: "center",
};

export const title = {
  color: nearBlackColor,
  margin: ".75rem 0 0.5rem",
  textDecoration: "none",
  fontWeight: "700",
  fontFamily: `"Lato", "Roboto", "Times New Roman", serif`,
};

export const heroTitle = {
  ...title,
  display: "inline-block",
  position: "relative",
  margin: "2em 0 1rem",
  color: "#FFFFFF",
  fontSize: "2.7em",
};

export const heroDescription = {
  margin: "0 0 1rem",
  color: "#FFFFFF",
  fontSize: "1.2em"
};

export const raisedDiv = {
  background: "#FFFFFF",
  textAlign: "center",
  position: "relative",
  zIndex: "3",
  margin: "-2rem 0  ",
  borderRadius: "0px", 
  boxShadow:
    "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
};

const cardTitle = {
  ...title,
  marginBottom: "1rem",
  marginTop: "1.2em",
  textDecoration: "none",
  fontSize: "1.5em",
};

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem",
  },
};

const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem",
};

export {
  hexToRGBAlpha,
  //variables
  drawerWidth,
  transition,
  container,
  containerFluid,
  boxShadow,
  card,
  defaultFont,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  cardTitle,
  cardLink,
  cardSubtitle,
};