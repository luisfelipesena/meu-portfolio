import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .footer {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1em;
    max-width: 1100px;
    margin-bottom: 2.5em;
    animation: go-full-forward 0.5s;
  }
  .container {
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    margin: 2em;
    flex: 1;
  }
  .div-main-content {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 1em;
    width: 100%;
    padding: 2em;
    font-size: 1.5em;
    box-shadow: 0px 0px 10px ${(props) => props.theme.colors.primary};
    border-radius: 20px;
    animation: go-full-forward 1s;
    @media (max-width: 768px) {
      padding: 0.5em;
    }
    .image {
      align-self: center;
      margin-bottom: 1em;
      img {
        width: calc(5em + 20vw);
        max-width: 15em;
        border-radius: 20px;
      }
    }
    .anchor {
      position: absolute;
      top: -5em;
    }
    .content {
      display: flex;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      font-size: calc(0.6em + 0.5vw);
      p {
        margin-top: 1em;
        font-family: "Ubuntu", "sans-serif";
      }
    }
    .content-secondary {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      text-align: center;
      font-size: calc(0.6em + 0.5vw);
      margin-top: 2em;
      p {
        margin: 0 1em;
        font-family: "Ubuntu", "sans-serif";
      }
      img {
        width: 100%;
      }
    }
    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
      margin: 2em 0em;
      .image {
        margin-right: 0;
      }
    }
  }
  .mail {
    color: ${(props) => props.theme.colors.secondaryText};
    text-decoration: underline;
  }

  .skills-images {
    max-width: 400px;
  }

  .imagesDiv {
    gap: 2em;
    justify-content: center !important;
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
