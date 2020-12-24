import Head from "next/head";
import useSWR from "swr";
import { HeaderComponent } from "../components/Header";
import { MainComponent } from "../components/MainHomepage";
import { UseFetch } from "../helpers/UseFetch";

export default function Home() {
  const fetcherPost = (url) => UseFetch(url, "POST", undefined);
  useSWR("/api/insertVisitor", fetcherPost);
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
