import Head from "next/head";
import Image from "next/image";
import { HeaderComponent } from "../components/Header";
import { MainComponent } from "../components/MainHomepage";

import minhaFoto from "../assets/minha-foto.jpeg";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Meu Portifólio</title>
      </Head>

      <HeaderComponent />
      <MainComponent />
    </>
  );
};

export default Home;
