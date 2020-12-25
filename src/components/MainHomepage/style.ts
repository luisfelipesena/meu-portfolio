import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  .container {
    display: flex;
    justify-content: space-between;
    flex: 0 1 1100px;
    padding: 2em;
    margin: 2em;
    font-size: 1.5em;
    box-shadow: 0px 0px 10px ${(props) => props.theme.colors.primary};
    border-radius: 20px;
    animation: go-full-forward 1.5s;
    .image {
      margin-right: 1em;
      img {
        width: calc(2em + 18vw);
        max-width: 12em;
        border-radius: 20px;
      }
    }
    .content {
      display: flex;
      justify-content: center;
      text-align: center;
      flex-direction: column;
    }
    @media (max-width: 800px) {
      flex-wrap: wrap;
      justify-content: center;
      .image {
        margin-right: 0;
      }
    }
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
