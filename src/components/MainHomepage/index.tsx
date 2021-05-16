import { Main } from "./style";

export const MainComponent: React.FC = () => {
  return (
    <Main>
      <div className="container">
        <div className="div-main-content">
          <div className="anchor" id="home" />
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
        <div className="div-main-content">
          <div className="anchor" id="skills" />
          <h2>Skilss</h2>
          <div className="content-secondary">
            <p>Html</p>
            <p>Javascript</p>
            <p>Css</p>
            <p>Next js</p>
            <p>Node.js</p>
          </div>
          <div className="content-secondary">
            <p>Git</p>
            <p>Soft Skills</p>
            <p>SDK</p>
            <p>Scss</p>
            <p>Webpack</p>
          </div>
        </div>
        <div className="div-main-content">
          <div className="anchor" id="contato" />
          <div className="content">
            <h2>Contato</h2>
            <p>
              E-mail:{" "}
              <a href="mailto:luisfelipesena@gmail.com">
                luisfelipesena@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};
