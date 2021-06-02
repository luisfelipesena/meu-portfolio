import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

import { HeaderComponent } from "@components/Header";
import GlobalStyle from "@styles/global";
import { Darktheme } from "@styles/themes";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [choosedTheme, setChoosedTheme] = useState(Darktheme);

  useEffect(() => {
    const oldTheme = localStorage.getItem("theme");
    if (oldTheme) {
      setChoosedTheme(JSON.parse(oldTheme));
    }
  }, []);

  return (
    <>
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
    </>
  );
};

export default MyApp;
