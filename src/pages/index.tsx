import Head from "next/head";
import { GetStaticProps } from "next";
import { HeaderComponent } from "../components/Header";
import { MainComponent } from "../components/MainHomepage";

const Home = ({ data }) => {
  return (
    <>
      <Head>
        <title>Meu Portifólio</title>
      </Head>
      <HeaderComponent />
      <MainComponent data={data} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://ip-api.com/json");
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

export default Home;
