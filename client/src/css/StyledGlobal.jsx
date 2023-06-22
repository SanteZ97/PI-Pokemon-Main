import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

  html, body, #root, .App {
    height: 100%;
    margin: 0;
    font-family: "Signika";
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.background};

    @font-face {
      font-family: 'Signika';
      src: local('Signika'), url('../../assets/fonts/Signika-VariableFont_wght.ttf');
    }
    @font-face {
      font-family: "Highway-Gothic";
      src: local("Highway-Gothic"), url("../../assets/fonts/Highway-Gothic.ttf");
    }
    @font-face {
      font-family: "Geometos";
      src: local("Geometos"), url("../../assets/fonts/Geometos.ttf");
    }
  }
`;
