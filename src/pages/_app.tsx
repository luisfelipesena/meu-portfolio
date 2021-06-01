import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

import { HeaderComponent } from "@components/Header";
import GlobalStyle from "@styles/global";
import LightTheme, { Darktheme } from "@styles/themes";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [choosedTheme, setChoosedTheme] = useState(Darktheme);

  if (typeof window !== "undefined") {
    const storage = localStorage.getItem("theme");
    useEffect(() => {
      localStorage.setItem(
        "theme",
        storage ? JSON.stringify(storage) : JSON.stringify(Darktheme)
      );
      setChoosedTheme(JSON.parse(storage) ?? Darktheme);
    }, []);
  }

  const toggleTheme = () => {
    localStorage.setItem(
      "theme",
      choosedTheme.title === LightTheme.title
        ? JSON.stringify(Darktheme)
        : JSON.stringify(LightTheme)
    );
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
