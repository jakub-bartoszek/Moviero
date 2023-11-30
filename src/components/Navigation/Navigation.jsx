import { Container, StyledLink, Wrapper } from "./styled";

export const Navigation = () => {
 return (
  <Wrapper>
   <Container>
    <StyledLink to="/movies">Movies</StyledLink>
    <StyledLink to="/people">People</StyledLink>
   </Container>
  </Wrapper>
 );
};
