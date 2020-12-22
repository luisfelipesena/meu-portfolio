import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  .container {
    display: flex;
    justify-content: space-between;
    flex: 0 1 1500px;
    padding: 2em;
    margin-top: 2em;
    font-size: 1.5em;
    box-shadow: 0px 0px 10px white;
    border-radius: 20px;
    animation: go-full-forward 1.5s;
  }
  @keyframes go-full-forward {
    0% {
      transform: translateX(-1980px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
