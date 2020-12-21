import { Header } from "../../styles/pages/Home";
import Image from "next/image";
import Link from "next/link";
import ArrowUp from "../../assets/arrow-up.png";
import LogoGithub from "../../assets/github.svg";
import LogoLinkedln from "../../assets/linkedin.svg";
import Contatos from "../../assets/contatos.svg";
import AboutMe from "../../assets/about-me.svg";

export const HeaderComponent = () => {
  return (
    <Header>
      <div className="container">
        <h1>Prazer, Luis Felipe</h1>
        <div>
          <Link href="/contato">
            <span title="Sobre Mim">
              <AboutMe />
            </span>
          </Link>
          <Link href="/contato">
            <span title="Contatos">
              <Contatos />
            </span>
          </Link>
          <Link href="https://github.com/luisfelipesena">
            <span title="Github">
              <LogoGithub />
            </span>
          </Link>
          <Link href="https://www.linkedin.com/in/luisfelipesena/">
            <span title="Linkedln">
              <LogoLinkedln />
            </span>
          </Link>
        </div>
      </div>
      <div className="estatisticas">
        <h4>Acessos :</h4>
        <span>
          111
          <div className="image">
            <Image src={ArrowUp} alt="Arrow Up" width={16} height={16} />
          </div>
        </span>
      </div>
    </Header>
  );
};
