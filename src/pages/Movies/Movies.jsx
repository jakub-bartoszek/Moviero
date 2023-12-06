import { useEffect, useState } from "react";
import { Container } from "../../components/Container/styled";
import { useDispatch, useSelector } from "react-redux";
import {
 fetchPopularMovies,
 fetchSimilarMovies,
 selectGenres,
 selectPopularMovies,
 selectRandomPopularMovie,
 selectSimilarMovies,
 setRandomPopularMovie
} from "../../utils/redux/moviesSlice";
import {
 Banner,
 Description,
 Genre,
 Genres,
 MovieDetails,
 OutOf,
 Poster,
 PosterWrapper,
 Rate,
 Rating,
 SectionHeader,
 SimilarMovies,
 SimilarMoviesWrapper,
 StarIcon,
 Title,
 Votes
} from "./styled";
import { nanoid } from "nanoid";

export const Movies = () => {
 const dispatch = useDispatch();
 const popularMovies = useSelector(selectPopularMovies);
 const similarMovies = useSelector(selectSimilarMovies);
 const genres = useSelector(selectGenres);
 const [currentMovie, setCurrentMovie] = useState(popularMovies[0]);
 const randomPopularMovie = useSelector(selectRandomPopularMovie);
 const movieGenres = genres?.filter((genre) =>
  currentMovie?.genre_ids.includes(genre.id)
 );
 const [cancel, setCancel] = useState(false);

 const handleClickScroll = (e) => {
  const element = e.target;
  if (element) {
   element.scrollIntoView({ behavior: "smooth", inline: "center" });
  }
 };

 useEffect(() => {
  dispatch(fetchPopularMovies());
 }, [dispatch]);

 useEffect(() => {
  if (popularMovies.length > 0) {
   dispatch(
    setRandomPopularMovie(popularMovies[Math.floor(Math.random() * 19)])
   );
  }
 }, [dispatch, popularMovies]);

 useEffect(() => {
  if (Object.keys(randomPopularMovie).length > 0) {
   setCurrentMovie(randomPopularMovie);
  }
 }, [dispatch, randomPopularMovie]);

 useEffect(() => {
  if (!cancel && currentMovie && Object.keys(currentMovie).length > 0) {
   dispatch(
    fetchSimilarMovies({ genreIds: currentMovie.genre_ids.join("%2C") })
   );
   setCancel(true);
  }
 }, [cancel, currentMovie, dispatch]);

 useEffect(() => {
  if (similarMovies.length > 0) {
  }
 }, [dispatch, similarMovies]);

 return (
  <Container>
   {currentMovie && (
    <Banner
     $bgImage={`https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}`}
    >
     <MovieDetails>
      <Title>{currentMovie?.title}</Title>
      <Genres>
       {movieGenres.map((genre) => (
        <Genre key={nanoid()}>{genre.name}</Genre>
       ))}
      </Genres>
      <Rating>
       <StarIcon />
       <Rate>
        {currentMovie?.vote_average}/<OutOf>10</OutOf>
        <Votes>&nbsp;{currentMovie?.vote_count} votes</Votes>
       </Rate>
      </Rating>
      <Description>{currentMovie?.overview}</Description>
     </MovieDetails>
    </Banner>
   )}
   {similarMovies.length > 0 && (
    <SimilarMoviesWrapper>
     <SectionHeader>Similar movies</SectionHeader>
     <SimilarMovies>
      {similarMovies.map((movie) => (
       <PosterWrapper
        key={nanoid()}
        onClick={(e) => {
         handleClickScroll(e);
         setCurrentMovie(movie);
        }}
       >
        <Poster
         id={movie.id}
         src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
       </PosterWrapper>
      ))}
     </SimilarMovies>
    </SimilarMoviesWrapper>
   )}
  </Container>
 );
};
