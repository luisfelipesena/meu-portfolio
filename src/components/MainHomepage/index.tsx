import { Main } from "./style";

export const MainComponent: React.FC = () => {
  return (
    <Main id="home">
      <div className="container">
        <div className="div-main-content">
          <div className="image">
            <img alt="minha foto" src="./minha-foto.jpeg" />
          </div>
          <div className="content">
            <h2>Desenvolvedor Front-end na Cubos Tecnologia</h2>
            <p>
              Além de estudante de Ciência da Computação na UFBA, estou sempre
              em busca de novos conhecimentos e procuro sempre entender a parte
              do Back-end/ UX e UI e tudo que envolve boas práticas para o
              desenvolvimento
            </p>
          </div>
        </div>
        <div className="div-main-content" id="skills">
          <div className="image">
            <img alt="minha foto" src="./minha-foto.jpeg" />
          </div>
          <div className="content">
            <h2>Desenvolvedor Front-end na Cubos Tecnologia</h2>
            <p>
              Além de estudante de Ciência da Computação na Ufba, estou sempre
              em busca de novos conhecimentos e procuro também entender a parte
              do Back-end para construir uma melhor noçâo das melhores boas
              práticas para os dois lados
            </p>
            <p>
              Desenvolvedor Front-end estudando para se aprimorar em Back e se
              tornar Full-stack
            </p>
          </div>
        </div>
        <div className="div-main-content" id="contato">
          <div className="image">
            <img alt="minha foto" src="./minha-foto.jpeg" />
          </div>
          <div className="content">
            <h2>Desenvolvedor Front-end na Cubos Tecnologia</h2>
            <p>
              Além de estudante de Ciência da Computação na Ufba, estou sempre
              em busca de novos conhecimentos e procuro também entender a parte
              do Back-end para construir uma melhor noçâo das melhores boas
              práticas para os dois lados
            </p>
            <p>
              Desenvolvedor Front-end estudando para se aprimorar em Back e se
              tornar Full-stack
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};
