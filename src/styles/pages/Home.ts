import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 1 1400px;
    padding: 2em;
    animation: fadein 1s;
    h1 {
      animation: go-forward 1s;
    }

    div {
      margin-left: 1em;
      flex: 0 1 400px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      animation: go-back 1s;
      span {
        color: ${(props) => props.theme.colors.text};
        border-bottom: 2px solid transparent;
        cursor: pointer;
        font-size: 1.2em;
        font-weight: bold;
        transition: 0.2s;
        animation: fadein 1s;
      }
      span:hover {
        color: white;
        border-bottom: 2px solid white;
      }
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
    flex: 0 1 1400px;
    padding: 2em;
  }
`;
