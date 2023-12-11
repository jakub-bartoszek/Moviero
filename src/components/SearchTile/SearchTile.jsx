import { toMovie } from "../../routes";
import {
 Content,
 Info,
 Poster,
 PosterWrapper,
 Rate,
 Rating,
 StarIcon,
 StyledLink,
 Title,
 Votes,
 Wrapper,
 Year
} from "./styled";

export const SearchTile = ({ movie, switchSearchbar }) => {
 return (
  <Wrapper>
   <StyledLink onClick={() => switchSearchbar()} to={toMovie({ id: movie.id })}>
    <PosterWrapper>
     {movie.poster_path && (
      <Poster src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} />
     )}
    </PosterWrapper>
    <Content>
     <Info>
      <Title> {movie.title}</Title>
      <Year> {movie.release_date.slice(0, 4)}</Year>
     </Info>
     <Rating>
      <StarIcon />
      <Rate>{movie.vote_average.toFixed(1)}</Rate>
      <Votes>{movie.vote_count}</Votes>
     </Rating>
    </Content>
   </StyledLink>
  </Wrapper>
 );
};
