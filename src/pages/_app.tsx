import React, { useState, useContext, createContext } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import LightTheme, { Darktheme } from "../styles/themes";
import Switch from "react-switch";
import { shade } from "polished";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [choosedTheme, setChoosedTheme] = useState(LightTheme);
  const toogleTheme = () => {
    setChoosedTheme(
      choosedTheme.title === LightTheme.title ? Darktheme : LightTheme
    );
  };
  return (
    <>
      <ThemeProvider theme={choosedTheme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
      <div
        style={{
          position: "absolute",
          top: "0.5em",
          left: "1em",
          animation: "go-forward 1.5s",
        }}
        onClick={() => {
          toogleTheme();
        }}
      >
        <Switch
          onChange={() => {}}
          checked={choosedTheme.title === Darktheme.title}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.15, choosedTheme.colors.primary)}
          onColor="#191616"
        />
      </div>
    </>
  );
};

export default MyApp;
