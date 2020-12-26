import { Header } from "./style";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { useFetch } from "../../helpers/Fetch";
import { useMediaQuery } from "../../helpers/MediaQuery";
import { Skeleton } from "@material-ui/lab";

const fetchInsertVisitor = (url) => useFetch(url, "POST", undefined);
const fetchGetVisitors = (url) => useFetch(url, "GET", undefined);
const links: {
  title: string;
  link: string;
  img: string | null;
}[] = [
  { title: "Home", link: "/", img: null },
  { title: "Sobre Mim", link: "/contato", img: "./about-me.svg" },
  { title: "Contato", link: "/contato", img: "./contatos.svg" },
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

export const HeaderComponent: React.FC = () => {
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
            <Link href="/">
              <h1>Prazer, Luis Felipe</h1>
            </Link>

            <div>
              {links.map((l) => {
                if (l.title === "Home") {
                  return <></>;
                }
                return (
                  <Link href={l.link}>
                    <span title={l.title}>
                      <img src={l.img} alt={l.title} />
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
              {links.map((l) => {
                return (
                  <li onClick={() => setMenuClicked(false)}>
                    <Link href={l.link}>
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
