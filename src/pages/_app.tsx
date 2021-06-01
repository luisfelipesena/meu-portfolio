import React, { useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

import { HeaderComponent } from "@components/Header";
import GlobalStyle from "@styles/global";
import LightTheme, { Darktheme } from "@styles/themes";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [choosedTheme, setChoosedTheme] = useState(Darktheme);
  const toggleTheme = () => {
    setChoosedTheme(
      choosedTheme.title === LightTheme.title ? Darktheme : LightTheme
    );
  };
  return (
    <>
      <ThemeProvider theme={choosedTheme}>
        <Head>
          <title>Meu Portifólio</title>
        </Head>
        <HeaderComponent
          toggleTheme={toggleTheme}
          choosedTheme={choosedTheme}
        />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
