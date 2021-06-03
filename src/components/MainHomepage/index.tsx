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
              em busca de novos conhecimentos procurando sempre entender sobre
              UX e UI, assim como a parte de Back end e tudo que envolve boas
              práticas para o desenvolvimento web.
            </p>
            <p>
              Concluí os cursos: <br /> "CS50's Introduction to Computer
              Science" da{" "}
              <a
                className="mail"
                href="https://courses.edx.org/certificates/717d83ab53a841fdb3c9e84557a9e23e"
                target="_blank"
              >
                HarvardX
              </a>{" "}
              e<br /> "Edx201: How to Learn Online" da{" "}
              <a
                className="mail"
                href="https://courses.edx.org/certificates/91a124e8dde44285aa1c21295243f202"
                target="_blank"
              >
                Edx
              </a>{" "}
              em 2020
              <br />
              <br /> E também tenho interesse pelo desenvolvimento mobile,
              principalmente pelo framework: Flutter, porém ainda estou pra
              aprender mais sobre.
            </p>
          </div>
        </div>
        <div className="div-main-content">
          <div className="anchor" id="skills" />
          <h2>Skills</h2>
          <div className="content-secondary imagesDiv">
            <img
              title="Github Content"
              className="skills-images"
              src={
                "https://camo.githubusercontent.com/fabab8af78e59b8ac570b57226ef91c16a1a5bcb5b6600a67b0298edd6211f21/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d6c75697366656c69706573656e61266c61796f75743d636f6d70616374267468656d653d636f62616c74"
              }
            />
            <img
              title="Github Content"
              className="skills-images"
              src={
                "https://camo.githubusercontent.com/2240b2e2b26a4a91dbbf45c49aa2fc106ce82cd7102211915ed0d32b541e8cc5/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6c75697366656c69706573656e612673686f775f69636f6e733d74727565267468656d653d636f62616c74"
              }
            />
            <img
              title="Html and javascript and css"
              className="skills-images"
              src={"./html-js-css-logo.png"}
            />
            <img
              title="Node"
              className="skills-images"
              src={"./node-logo.png"}
            />
            <img
              title="React and typescript"
              className="skills-images"
              src={"./react-typescript-logo.png"}
            />
            <img
              title="Next.js"
              className="skills-images"
              src={"./nextjs-logo.png"}
            />
            <img
              title="Sass"
              className="skills-images"
              src={"./sass-logo.png"}
            />
            <img title="git" className="skills-images" src={"./git-logo.png"} />
            <img
              title="Postgres"
              className="skills-images"
              src={"./postgres-logo.png"}
            />
            <img
              title="Styled components"
              className="skills-images"
              src={"./styled-components-logo.png"}
            />
          </div>
        </div>
        <div className="div-main-content">
          <div className="anchor" id="projetos" />
          <h2>Projetos pessoais</h2>
          <div className="content-secondary imagesDiv">
            <img
              src={
                "https://cdn.discordapp.com/attachments/454459176622751757/849350382730739772/Desktop_2021.06.01_-_15.11.44.09.gif"
              }
            />
            <img
              src={
                "https://media-exp1.licdn.com/dms/image/C4D2DAQGy6bJwzS7GXw/profile-treasury-image-shrink_1920_1920/0/1595130859880?e=1622808000&v=beta&t=Tc7pazz1MO4saGSXqbEl2bhe_7WPlhOWdKOsf3r-zCo"
              }
            />

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
            <img
              src={
                "https://media.discordapp.net/attachments/454459176622751757/849327222522380328/Desktop_2021.06.01_-_13.38.15.06.gif"
              }
            />
            <img
              src={
                "https://cdn.discordapp.com/attachments/454459176622751757/849328908103974920/Desktop_2021.06.01_-_13.47.41.07.gif"
              }
            />
            <img
              src={
                "https://camo.githubusercontent.com/ab3263c7668e5e8c0604fcfd60e3a3cc1116a06dd38fa9e0fe137404d1109aed/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3439333538363431373835353735383335362f3737303033303833333433313630393338342f756e6b6e6f776e2e706e67"
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
              <a href="mailto:luisfelipesena@gmail.com" className="mail">
                luisfelipesena@gmail.com
              </a>
            </p>
            <p>
              Github:{" "}
              <a
                href="https://github.com/luisfelipesena"
                className="mail"
                target="_blank"
              >
                https://github.com/luisfelipesena
              </a>
            </p>
            <p>
              Linkedln:{" "}
              <a
                href="https://www.linkedin.com/in/luisfelipesena/"
                className="mail"
                target="_blank"
              >
                https://www.linkedin.com/in/luisfelipesena/
              </a>
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};
