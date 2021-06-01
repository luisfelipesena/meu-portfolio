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
            <p>Git</p>
            <p>React</p>
            <p>Next js</p>
            <p>Node.js</p>
          </div>
        </div>
        <div className="div-main-content">
          <div className="anchor" id="skills" />
          <div className="content-secondary">
            <img
              src={
                "https://camo.githubusercontent.com/f3052a77607d55febf82e13153d26a0ae3b7ae0280a2d0064eff33ca29ac6c14/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3430373030363333303834333536313938352f3738343536393736363838323730353437382f657a6769662e636f6d2d6769662d6d616b65725f312e676966"
              }
            />
            <img
              src={
                "https://camo.githubusercontent.com/a5361bc87352b4bc2c514ed8cd5c93a6b73f2cc612fbefd018fc59ecb94d47df/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3430373030363333303834333536313938352f3738343536393736363533343537383230362f657a6769662e636f6d2d6769662d6d616b65722e676966"
              }
            />
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
