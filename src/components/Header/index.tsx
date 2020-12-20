import { Header } from "../../styles/pages/Home";
import Link from "next/link";

export const HeaderComponent: React.FC = () => {
  return (
    <Header>
      <div className="container">
        <h1>Welcome, I'm Luis Felipe</h1>
        <div>
          <Link href="/contato">
            <span>About Me</span>
          </Link>
          <Link href="/contato">
            <span>Contact</span>
          </Link>
          <Link href="https://github.com/luisfelipesena">
            <span>Github</span>
          </Link>
          <Link href="https://www.linkedin.com/in/luisfelipesena/">
            <span>Linkedin</span>
          </Link>
        </div>
      </div>
    </Header>
  );
};
