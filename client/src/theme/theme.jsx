/*
  CONVENCIÓN TEMÁTICA

  <background>: valor máximo de luminosidad/oscuridad de la paleta, poca o ninguna saturación.
  <text>: inverso de <background>, poca o ninguna saturación.
  <primary>: el siguiente valor más cercano al gris en comparación con <background>, poca saturación.
  <secondary>: el siguiente valor más cercano al gris comparado con <primary>, saturación media.
  <tertiary>: el siguiente valor más cercano al gris comparado con <secondary>, saturación alta.
  <accent>: el color más colorido, saturado y brillante para los detalles, saturación más alta.
*/

export const theme = {
  light: {
    name: "light",
    colors: {
      background: "rgb(245, 235, 228)",
      text: "rgb(51, 51, 51)",
      grayed: "rgba(150, 137, 137, 0.4)",
      primary: "rgb(247, 222, 213)",
      secondary: "rgb(246, 205, 197)",
      tertiary: "rgb(240, 165, 165)",
      accent: "rgb(228, 64, 75)",
    },
    splashScreen: "pokemon-light.webp",
    tileBackground: "bg-tile-light.png",
  },
  dark: {
    name: "dark",
    colors: {
      background: "rgb(24, 18, 28)",
      text: "rgb(255, 255, 255)",
      grayed: "rgba(128, 128, 136, 0.3)",
      primary: "rgb(40, 30, 53)",
      secondary: "rgb(53, 41, 80)",
      tertiary: "rgb(71, 49, 125)",
      accent: "rgb(160, 133, 255)",
    },
    splashScreen: "pokemon-dark.webp",
    tileBackground: "bg-tile-dark.png",
  },
};
