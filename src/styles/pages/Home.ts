import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  animation: go-full-forward 0.5s;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 1 1400px;
    padding: 2em;
    animation: fadein 1s;
    color: ${(props) => props.theme.colors.headerText};
    h1 {
      animation: go-forward 1.5s;
    }

    div {
      margin-left: 1em;
      flex: 0 1 400px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      animation: go-back 1.5s;
      span {
        border-bottom: 2px solid transparent;
        cursor: pointer;
        font-size: 1.2em;
        font-weight: bold;
        transition: 0.2s;
        animation: fadein 1.5s;
      }
      span:hover {
        color: white;
        border-bottom: 2px solid white;
      }
    }
  }

  .estatisticas {
    margin: 0 1em;
    color: ${(props) => props.theme.colors.secondaryText};
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2em;
    font-weight: bold;
    animation: go-back 2s;
    h4 {
      margin-bottom: 0.5em;
      white-space: nowrap;
    }
    .image {
      display: inline;
    }
  }

  @keyframes go-back {
    0% {
      transform: translateX(250px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes go-forward {
    0% {
      transform: translateX(-250px);
    }
    100% {
      transform: translateX(0);
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
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

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
`;
