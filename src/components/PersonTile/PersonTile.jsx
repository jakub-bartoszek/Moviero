import { toPerson } from "../../routes";
import {
 Content,
 Job,
 Name,
 Image,
 ImageWrapper,
 Role,
 StyledLink,
 Wrapper
} from "./styled";


export const PersonTile = ({ person }) => {
 return (
  <Wrapper>
   <StyledLink to={toPerson({ id: person.id })}>
    <ImageWrapper>
     {person.profile_path && (
      <Image src={`https://image.tmdb.org/t/p/w400/${person.profile_path}`} />
     )}
    </ImageWrapper>
    <Content>
     <Name> {person.name}</Name>
     {person.job && <Job>{person.job}</Job>}
     {person.character && <Role>{person.character}</Role>}
    </Content>
   </StyledLink>
  </Wrapper>
 );
};
