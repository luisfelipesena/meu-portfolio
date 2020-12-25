import Head from "next/head";
import { HeaderComponent } from "../components/Header";
import { MainComponent } from "../components/MainHomepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Portifólio</title>
      </Head>
      <HeaderComponent />
      <MainComponent />
    </>
  );
}
