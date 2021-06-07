import Link from "next/link";
import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import { shade } from "polished";
import { useStores } from "src/stores";

import ScrollIntoView from "react-scroll-into-view";

import { Header } from "./style";
import { useMediaQuery } from "@helpers/MediaQuery";
import { Skeleton } from "@material-ui/lab";
import LightTheme, { Darktheme } from "@styles/themes";
import { useI18n } from "src/translate/i18n";

const links: {
  key: string;
  title: string;
  link?: string;
  img: string | null;
}[] = [
  { title: useI18n().t("skills"), img: "./skills.svg", key: "skills" },
  { title: useI18n().t("projects"), img: "./projeto.svg", key: "projects" },
  { title: useI18n().t("contact"), img: "./contatos.svg", key: "contact" },
  {
    title: "Github",
    link: "https://github.com/luisfelipesena",
    img: "./github.svg",
    key: "github",
  },
  {
    title: "Linkedln",
    link: "https://www.linkedin.com/in/luisfelipesena/",
    img: "./linkedin.svg",
    key: "linkedln",
  },
];

interface iProps {
  choosedTheme: {
    title: string;
    colors: {
      background: string;
      text: string;
      secondaryText: string;
      headerText: string;
      primary: string;
    };
  };
  setChoosedTheme: React.Dispatch<
    React.SetStateAction<{
      title: string;
      colors: {
        background: string;
        text: string;
        secondaryText: string;
        headerText: string;
        primary: string;
      };
    }>
  >;
}
export const HeaderComponent: React.FC<iProps> = ({
  choosedTheme,
  setChoosedTheme,
}) => {
  const {
    usersStore: { getVisitors, insertVisitor, userAcesses },
  } = useStores();

  const isMobile = useMediaQuery("(max-width: 900px)");
  const [menuClicked, setMenuClicked] = useState(false);

  const [getError, setGetError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("insertedVisitor")) {
      getVisitors().then((r) => {
        setGetError(r.error);
      });
    } else {
      insertVisitor().then(() => {
        localStorage.setItem("insertedVisitor", "true");
        getVisitors().then((r) => {
          setGetError(r.error);
        });
      });
    }
  }, []);

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

  if (getError) {
    return (
      <Header>
        <div className="container" style={{ flexDirection: "column" }}>
          <Skeleton width={"100%"} height={"2em"} />
          <Skeleton width={"100%"} height={"2em"} />
        </div>
      </Header>
    );
  }
  return (
    <Header>
      {!isMobile ? (
        <>
          <div className="container">
            {useSwitch({ toggleTheme, choosedTheme })}
            <ScrollIntoView selector="#home" alignToTop={true}>
              <h1 suppressHydrationWarning title="Home">
                {useI18n().t("title")}
              </h1>
            </ScrollIntoView>

            <div className="links">
              {links.map((l, i) => {
                return l.link ? (
                  <a href={l.link} target="_blank" className="span" key={i}>
                    <label suppressHydrationWarning className="label">
                      {l.title}
                    </label>
                    <span>
                      <img
                        suppressHydrationWarning
                        src={l.img}
                        alt={l.title}
                        style={{ height: "36px" }}
                      />
                    </span>
                  </a>
                ) : (
                  <ScrollIntoView
                    key={i}
                    selector={`#${l.key}`}
                    className="span"
                  >
                    <label suppressHydrationWarning className="label">
                      {l.title}
                    </label>
                    <span>
                      <img
                        suppressHydrationWarning
                        src={l.img}
                        alt={l.title}
                        style={{ height: "36px" }}
                      />
                    </span>
                  </ScrollIntoView>
                );
              })}
            </div>
          </div>
          <div className="estatisticas">
            <h4 suppressHydrationWarning>{useI18n().t("accesses")}</h4>
            {userAcesses ? (
              <>
                <span>
                  {userAcesses}
                  <img alt="arrow up" src="./arrow-up.png" />
                </span>
              </>
            ) : (
              <Skeleton width={"100%"} height={"2em"} />
            )}
          </div>
        </>
      ) : !menuClicked ? (
        <>
          <div className="container">
            {useSwitch({ toggleTheme, choosedTheme })}
            <ScrollIntoView selector="#home" alignToTop={true}>
              <h1 style={{ animation: 0 }}>{useI18n().t("title")}</h1>
            </ScrollIntoView>
            <button
              className="menu-hamburger"
              onClick={() => setMenuClicked((e) => !e)}
            >
              <img src={"./hamburger.svg"} alt="menu hamburger" />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            {useSwitch({ toggleTheme, choosedTheme })}
            <ScrollIntoView selector="#home" alignToTop={true}>
              <h1 style={{ animation: 0 }}>{useI18n().t("title")}</h1>
            </ScrollIntoView>
            <button
              className="menu-hamburger"
              onClick={() => setMenuClicked((e) => !e)}
            >
              <img src={"./hamburger.svg"} alt="menu hamburger" />
            </button>
          </div>
          <div className="bleak" onClick={() => setMenuClicked(false)} />
          <div className="menu-lateral">
            <button
              className="menu-hamburger"
              onClick={() => setMenuClicked((e) => !e)}
            >
              <img src={"./hamburger.svg"} alt="menu hamburger" />
            </button>
            <ul>
              {links.map((l, i) => {
                return (
                  <li onClick={() => setMenuClicked(false)} key={i}>
                    {l.link ? (
                      <Link href={l.link} key={i}>
                        <span>{l.title}</span>
                      </Link>
                    ) : (
                      <ScrollIntoView
                        className="spanMobile"
                        selector={`#${l.title.toLowerCase()}`}
                        alignToTop={true}
                      >
                        <span>{l.title}</span>
                      </ScrollIntoView>
                    )}
                  </li>
                );
              })}
            </ul>
            <div
              className="estatisticas"
              style={{ margin: "1em 0 2em 0", animation: 0 }}
            >
              <h4 suppressHydrationWarning>{useI18n().t("accesses")}</h4>
              {userAcesses ? (
                <>
                  <span>
                    {userAcesses}
                    <img alt="arrow up" src="./arrow-up.png" />
                  </span>
                </>
              ) : (
                <Skeleton width={"100%"} height={"2em"} />
              )}
            </div>
          </div>
        </>
      )}
    </Header>
  );
};

function useSwitch({ toggleTheme, choosedTheme }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "0.5em",
        left: "1em",
        animation: "go-forward 1.5s",
      }}
    >
      <Switch
        onChange={toggleTheme}
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
  );
}
