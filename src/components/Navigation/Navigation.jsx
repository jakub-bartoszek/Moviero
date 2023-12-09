import { Logo } from "../Logo/Logo";
import { Searchbar } from "../Searchbar/Searchbar";
import { Container, Links, StyledNavLink, Wrapper } from "./styled";

export const Navigation = () => {
 return (
  <Wrapper>
   <Container>
    <Logo to="/movies"/>
    <Links>
     <StyledNavLink to="/movies">Movies</StyledNavLink>
     <StyledNavLink to="/people">People</StyledNavLink>
     <StyledNavLink to="/people">TV Shows</StyledNavLink>
    </Links>
    <Searchbar />
   </Container>
  </Wrapper>
 );
};
