import Link from "next/link";
import React from "react";
import Switch from "react-switch";
import useSWR from "swr";
import { shade } from "polished";

import { Header } from "./style";
import { useFetch } from "@helpers/Fetch";
import { useMediaQuery } from "@helpers/MediaQuery";
import { Skeleton } from "@material-ui/lab";
import { Darktheme } from "@styles/themes";

const fetchInsertVisitor = (url) => useFetch(url, "POST", undefined);
const fetchGetVisitors = (url) => useFetch(url, "GET", undefined);

const links: {
  title: string;
  link: string;
  img: string | null;
}[] = [
  { title: "Home", link: "/", img: null },
  { title: "Contato", link: "/contato", img: "./contatos.svg" },
  { title: "Codepen", link: "/", img: "./codepen.svg" },
  {
    title: "Github",
    link: "https://github.com/luisfelipesena",
    img: "./github.svg",
  },
  {
    title: "Linkedln",
    link: "https://www.linkedin.com/in/luisfelipesena/",
    img: "./linkedin.svg",
  },
];

interface iProps {
  toggleTheme(): void;
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
}
export const HeaderComponent: React.FC<iProps> = ({
  toggleTheme,
  choosedTheme,
}) => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const [menuClicked, setMenuClicked] = React.useState(false);

  const { error: insertError } = useSWR(
    "/api/insertVisitor",
    fetchInsertVisitor
  );
  const { data, error: getError } = useSWR(
    "/api/getVisitors",
    fetchGetVisitors
  );

  if (insertError || getError) {
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
            <Link href="/">
              <h1>Prazer, Luis Felipe</h1>
            </Link>

            <div className="links">
              {links.map((l) => {
                if (l.title === "Home") {
                  return <></>;
                }
                return (
                  <Link href={l.link}>
                    <span title={l.title}>
                      <img
                        src={l.img}
                        alt={l.title}
                        style={{ height: "36px" }}
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="estatisticas">
            <h4>Acessos</h4>
            {data ? (
              <>
                <span>
                  {data.data}
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
            <Link href="/">
              <h1>Prazer, Luis Felipe</h1>
            </Link>
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
            <Link href="/">
              <h1>Prazer, Luis Felipe</h1>
            </Link>
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
                    <Link href={l.link} key={i}>
                      <span>{l.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
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
