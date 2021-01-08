import styled from "styled-components";

export const Header = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  animation: go-full-forward 0.5s;

  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 0 1 1000px;
    padding: 2em;
    animation: fadein 1s;
    color: ${(props) => props.theme.colors.headerText};
    h1 {
      cursor: pointer;
      animation: go-forward 1.5s;
      white-space: nowrap;
      font-size: calc(1.2em + 1vw);
      margin-right: 1em;
    }

    .links {
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
      }
      span:hover,
      .span:hover {
        animation: shake 0.4s;
      }
    }
  }

  .spanMobile {
    display: flex;
    width: 100%;
  }

  .estatisticas {
    margin: 0 1em;
    color: ${(props) => props.theme.colors.headerText};
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

  .menu-hamburger {
    width: 2.5em;
    background-color: transparent;
    outline: 0;
    border: 0;
    cursor: pointer;
  }

  .bleak {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  .menu-lateral {
    animation: go-back 0.5s;
    width: 200px;
    z-index: 10;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    .menu-hamburger {
      align-self: flex-end;
      margin: 2.45em 2.4em 2.45em 0;
    }
    ul {
      width: 100%;
      flex: 1;
    }
    li {
      display: flex;
      margin-bottom: 1px solid ${(props) => props.theme.colors.text};
      cursor: pointer;
      span {
        text-align: center;
        padding: 1em 0;
        width: 100%;
        font-size: 1.5em;
        font-weight: bold;
        color: darkslategrey;
      }
    }
    li:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(15deg);
    }
    66% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0);
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
