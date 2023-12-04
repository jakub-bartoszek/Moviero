import { Logo } from "../Logo/Logo";
import { Searchbar } from "../Searchbar/Searchbar";
import { Container, Links, StyledLink, Wrapper } from "./styled";

export const Navigation = () => {
 return (
  <Wrapper>
   <Container>
    <Logo />
    <Links>
     <StyledLink to="/movies">Movies</StyledLink>
     <StyledLink to="/people">People</StyledLink>
     <StyledLink to="/people">TV Shows</StyledLink>
    </Links>
    <Searchbar />
   </Container>
  </Wrapper>
 );
};
