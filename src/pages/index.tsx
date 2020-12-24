import Head from "next/head";
import { HeaderComponent } from "../components/Header";
import { MainComponent } from "../components/MainHomepage";
import fetch from "isomorphic-unfetch";
export interface iData {
  [acessos: string]: [data: number];
}

const isDev = process.env.DEV ? true : false;

export default function Home({ acessos = null }: iData): JSX.Element {
  return (
    <>
      <Head>
        <title>Meu Portifólio</title>
      </Head>
      <HeaderComponent acessos={acessos} />
      <MainComponent />
    </>
  );
}

export async function getStaticProps() {
  await fetch(
    isDev
      ? "http://localhost:3000/api/insertVisitor"
      : "https://luisfelipe.live/api/insertVisitor"
  );
  const res = await fetch(
    isDev
      ? "http://localhost:3000/api/getVisitors"
      : "https://luisfelipe.live/api/getVisitors"
  );
  const acessos: iData = await res.json();

  return {
    props: {
      acessos: acessos.data,
    },
    revalidate: 300,
  };
}
