import { useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import { Whitetheme, Darktheme } from "../styles/theme";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [choosedDarkTheme, setChoosedDarkTheme] = useState(false);
  return (
    <>
      <ThemeProvider theme={choosedDarkTheme ? Darktheme : Whitetheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
      <button
        onClick={() => setChoosedDarkTheme((t) => !t)}
        style={{
          position: "absolute",
          top: "1em",
          left: "1em",
          border: "1px solid green",
          outline: 0,
          borderRadius: "40px",
          padding: "0.5em",
          cursor: "pointer",
          background: choosedDarkTheme ? "white" : "black",
        }}
      />
    </>
  );
};

export default MyApp;
