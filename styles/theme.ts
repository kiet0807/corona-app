import { Theme } from "theme-ui";
export const theme: Theme = {
  fontSizes: [12, 14, 16, 18, 20, 22, 24],

  colors: {
    primary: "blue",
    secondary: "grey",
    white: "#fff",
    bigStone: "#1C2D41",
    outerSpace: "#202E2E",
    chelseaCucumber: "#7DA751",
    chelseaCucumber18: "rgba(125, 167, 81, 0.18)",
    mistGray: "#C2C2B5",
  },

  images: {
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 10,
    },
    symptoms: {
      m: 10,
      mb: 0,
      height: 110,
      borderRadius: 10,
    },
    boarding: {
      width: "100%",
      height: 270,
    },
    corona: {
      width: 150,
      height: 25,
    },
    person: {
      width: 111,
      height: 130,
    },
    diagnosis: {
      mt: 25,
      mb: 15,
      width: 150,
      height: 140,
    },
  },

  buttons: {
    primary: {
      bg: "#fff",
      borderRadius: 23,
      height: 45,
      width: 90,
      cursor: "pointer",
      transition: "all 0.3s ease-in-out 0s",
      opacity: 0.8,
      boxShadow: "rgb(0 0 0 / 10%) 1px 4px 4px 1px",
      ":hover": {
        opacity: 1,
      },
      ":active": {
        transform: "scale(0.95)",
      },
    },
    secondary: {
      bg: "chelseaCucumber",
      borderRadius: 150,
      height: 40,
      width: 135,
      cursor: "pointer",
      transition: "all 0.3s ease-in-out 0s",
      opacity: 0.8,
      boxShadow: "rgb(0 0 0 / 10%) 1px 6px 6px 1px",
      ":hover": {
        opacity: 1,
      },
      ":active": {
        transform: "scale(0.95)",
      },
    },
    tertiary: {
      bg: "chelseaCucumber",
      borderRadius: 150,
      height: 45,
      width: 120,
      cursor: "pointer",
      transition: "all 0.3s ease-in-out 0s",
      opacity: 0.9,
      boxShadow: "rgb(0 0 0 / 10%) 1px 6px 6px 1px",
      ":hover": {
        opacity: 1,
      },
      ":active": {
        transform: "scale(0.95)",
      },
    },
    phone: {
      mt: "5px",
      bg: "chelseaCucumber",
      borderRadius: 150,
      height: 45,
      width: 200,
      cursor: "pointer",
      transition: "all 0.3s ease-in-out 0s",
      opacity: 0.9,
      boxShadow: "rgb(0 0 0 / 10%) 1px 6px 6px 1px",
      ":hover": {
        opacity: 1,
      },
      ":active": {
        transform: "scale(0.95)",
      },
    },
  },
  fontWeights: {
    body: 500,
    heading: 900,
  },
};
