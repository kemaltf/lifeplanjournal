import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`\
  :root {
    --gog-primary: #003f59;
    --gog-primary-dark-1: #001b26;
    --gog-primary-dark-2: #001b26;
    --gog-forth-color: #eaf6f4;
    --gog-royal-blue: #00269A;
    --gog-sky-blue: #6BAAE5;
    --gog-pastel-teal: #A5E6DA;
    --gog-pastel-teal-darker: #6dc3c2;
    --gog-bright-red: #FF5B5A;
    --gog-coral-pink: #FD8C83;
    --gog-crayola-yellow: #F9E08E;
  }
  html,
  body, input, button {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
   }

  html,
  body {
    /* min-height: 100vh;
    position: relative; */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

`;

export default GlobalStyle;
