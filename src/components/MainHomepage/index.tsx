import { iData } from "../../pages";
import { Main } from "./style";

export const MainComponent: React.FC = () => {
  return (
    <Main>
      <div className="container">
        <h2>Descrição</h2>
        <p>Concluí a faculdade no Sartre ...</p>
        <p>
          Desenvolvedor Front-end estudando para se aprimorar em Back e se
          tornar Full-stack
        </p>
      </div>
    </Main>
  );
};
