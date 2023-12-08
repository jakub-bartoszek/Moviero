import {
 Content,
 Info,
 Poster,
 PosterWrapper,
 Rate,
 Rating,
 StarIcon,
 Title,
 Votes,
 Wrapper,
 Year
} from "./styled";

export const SearchTile = ({ movie, handleResultClick }) => {
 return (
  <Wrapper onClick={handleResultClick}>
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
  </Wrapper>
 );
};
