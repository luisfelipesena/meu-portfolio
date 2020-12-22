import { Main } from "./style";

export const MainComponent = ({ data }) => {
  return (
    <Main>
      <div className="container">
        Você está vindo da {data.regionName} ? Que Bom !!!
      </div>
    </Main>
  );
};
