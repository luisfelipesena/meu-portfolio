import { Header } from "./style";
import Link from "next/link";
import React from "react";

export const HeaderComponent = () => {
  return (
    <Header>
      <div className="container">
        <h1>Prazer, Luis Felipe</h1>

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
        <span>
          <img src="http://contador.kinghost.com.br/contador.cgi?ft=1|df=luisfelipe.live" />
        </span>
      </div>
    </Header>
  );
};
