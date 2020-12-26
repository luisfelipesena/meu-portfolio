import { Header } from "./style";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { UseFetch } from "../../helpers/useFetch";
import { Skeleton } from "@material-ui/lab";
import { UseMediaQuery } from "../../helpers/useMediaQuery";

const fetchInsertVisitor = (url) => UseFetch(url, "POST", undefined);
const fetchGetVisitors = (url) => UseFetch(url, "GET", undefined);

export const HeaderComponent: React.FC = () => {
  const isMobile = UseMediaQuery("(max-width: 900px)");
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
              <Link href="/contato">
                <span title="Sobre Mim">
                  <img src={"./about-me.svg"} alt="Sobre Mim" />
                </span>
              </Link>
              <Link href="/contato">
                <span title="Contatos">
                  <img src={"./contatos.svg"} alt="Contatos" />
                </span>
              </Link>
              <Link href="https://github.com/luisfelipesena">
                <span title="Github">
                  <img src={"./github.svg"} alt="Github" />
                </span>
              </Link>
              <Link href="https://www.linkedin.com/in/luisfelipesena/">
                <span title="Linkedln">
                  <img src={"./linkedin.svg"} alt="Linkedln" />
                </span>
              </Link>
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
              <li>
                <Link href="/contato">
                  <span>Sobre Mim</span>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <span>Sobre Mim</span>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <span>Sobre Mim</span>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <span>Sobre Mim</span>
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </Header>
  );
};
