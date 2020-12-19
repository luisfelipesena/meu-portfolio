import Link from "next/link";
import { useRouter } from "next/router";

export default function Pessoa() {
  const router = useRouter();
  const query = router.query;
  console.log(query);
  return (
    <>
      <div>{query.pessoa ? query.pessoa : "Eu"}</div>
      <Link href="/contato">Contato</Link>
      <Link href="/">Home</Link>
      <button onClick={() => router.push("/teste")}>Clica</button>
    </>
  );
}
