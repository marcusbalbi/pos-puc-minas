import { MainMenuContainer } from "../styles/MainMenuContainer";
import { Link } from "react-router-dom";

export const MainMenu = () => {
  return (
    <MainMenuContainer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <Link to="/about">Sobre</Link>
      </ul>
    </MainMenuContainer>
  );
};
