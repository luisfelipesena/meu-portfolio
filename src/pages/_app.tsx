import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

import { HeaderComponent } from "@components/Header";
import GlobalStyle from "@styles/global";
import { Darktheme } from "@styles/themes";

import { StoresProvider } from "../stores/index";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [choosedTheme, setChoosedTheme] = useState(Darktheme);

  useEffect(() => {
    const oldTheme = localStorage.getItem("theme");
    if (oldTheme) {
      setChoosedTheme(JSON.parse(oldTheme));
    }
  }, []);

  return (
    <StoresProvider>
      <ThemeProvider theme={choosedTheme}>
        <Head>
          <title>Meu Portifólio</title>
        </Head>
        <HeaderComponent
          choosedTheme={choosedTheme}
          setChoosedTheme={setChoosedTheme}
        />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </StoresProvider>
  );
};

export default MyApp;
