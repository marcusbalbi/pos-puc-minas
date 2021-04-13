import { HeaderContainer } from "../styles/HeaderContainer"
import { MainMenu } from "./MainMenu"

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>My Movies</h1>
      <MainMenu />
    </HeaderContainer>
  )
}