import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../styles/globalstyles";
import Navbar from "../components/organism/Navbar";
import Footer from "../components/organism/Footer";
import styled from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <GlobalStyle />
        <Container>
          <Component {...pageProps} />
        </Container>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export const Container = styled.div`
  padding-top: 50px;
`;
