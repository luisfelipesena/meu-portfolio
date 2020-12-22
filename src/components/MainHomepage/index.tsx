import { Main } from "./style";
import useSWR from "swr";
import { UseFetch } from "../../helpers/UseFetch";

interface iProps {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
}

const thisFetcher = (url: string) =>
  UseFetch(url, "GET", undefined).then((res) => res.json());

export const MainComponent = () => {
  const { data, error } = useSWR("/api/getCity", thisFetcher);
  if (!data) {
    return (
      <Main>
        <div className="container">Skeleton Antd</div>
      </Main>
    );
  }
  if (error) {
    <Main>
      <div className="container">A Página deu um probleminha !!!</div>
    </Main>;
  }

  const response: iProps = data?.data;
  return (
    <Main>
      <div className="container">
        Você está vindo da {response.regionName} ? Que Bom !!!
      </div>
    </Main>
  );
};
