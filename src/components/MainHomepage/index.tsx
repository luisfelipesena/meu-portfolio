import { Main } from "./style";

export const MainComponent: React.FC = () => {
  return (
    <Main>
      <div className="container">
        <div className="image">
          <img alt="minha foto" src="./minha-foto.jpeg" />
        </div>
        <div className="content">
          <h2>Descrição</h2>
          <p>Concluí a faculdade no Sartre ...</p>
          <p>
            Desenvolvedor Front-end estudando para se aprimorar em Back e se
            tornar Full-stack
          </p>
        </div>
      </div>
    </Main>
  );
};
