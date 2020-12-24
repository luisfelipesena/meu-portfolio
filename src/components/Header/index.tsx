import { Header } from "./style";
import Link from "next/link";
import { Skeleton } from "@material-ui/lab";
import { iData } from "../../pages";

export const HeaderComponent: React.FC<iData> = ({ acessos }) => {
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
      {acessos ? (
        <div className="estatisticas">
          <h4>Acessos :</h4>
          <span>
            {acessos}
            <div className="image">
              <img src={"./arrow-up.png"} alt="Arrow Up" />
            </div>
          </span>
        </div>
      ) : (
        <div className="estatisticas">
          <Skeleton variant="circle" width={"4.4em"} height={"4em"} />
        </div>
      )}
    </Header>
  );
};
