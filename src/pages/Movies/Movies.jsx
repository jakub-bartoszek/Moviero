import { useEffect, useRef, useState } from "react";
import { Container } from "../../components/Container/styled";
import { useDispatch, useSelector } from "react-redux";
import {
 fetchPopularMovies,
 fetchSimilarMovies,
 selectGenres,
 selectPopularMovies,
 selectRandomPopularMovie,
 selectSimilarMovies,
 selectStatus,
 setRandomPopularMovie
} from "../../utils/redux/moviesSlice";
import {
 Banner,
 Description,
 Genre,
 Genres,
 MovieDetails,
 OutOf,
 PopularMovies,
 PopularMoviesWrapper,
 Poster,
 PosterWrapper,
 Rate,
 Rating,
 SectionHeader,
 SimilarMovies,
 SimilarMoviesWrapper,
 StarIcon,
 Votes,
 Title
} from "./styled";
import { nanoid } from "nanoid";
import { Tile } from "../../components/Tile/Tile";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";
import { Loader } from "../../components/Loader/Loader";

export const Movies = () => {
 const dispatch = useDispatch();
 const status = useSelector(selectStatus);
 const popularMovies = useSelector(selectPopularMovies);
 const similarMovies = useSelector(selectSimilarMovies);
 const genres = useSelector(selectGenres);
 const [currentMovie, setCurrentMovie] = useState(popularMovies[0]);
 const randomPopularMovie = useSelector(selectRandomPopularMovie);
 const movieGenres = genres?.filter((genre) =>
  currentMovie?.genre_ids.includes(genre.id)
 );
 const [cancel, setCancel] = useState(false);
 const [searchParams, setSearchParams] = useSearchParams();
 const containerRef = useRef(null);
 const bannerRef = useRef(null);

 const handleClickScroll = (e) => {
  const element = e.target;
  if (element) {
   element.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest"
   });
  }
 };

 useEffect(() => {
  if (!searchParams.get("page")) {
   searchParams.set("page", 1);
   setSearchParams(searchParams);
  }
 }, []);

 useEffect(() => {
  if (searchParams.get("page")) {
   dispatch(fetchPopularMovies({ page: searchParams.get("page") }));
  }
 }, [searchParams, dispatch]);

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
   setCancel(false);
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

 return (
  <Container ref={containerRef}>
   {
    {
     loading: <Loader />,
     error: <>Error</>,
     success: (
      <>
       {currentMovie && (
        <Banner
         key={currentMovie.id}
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
            $current={movie.id === currentMovie.id}
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
       <PopularMoviesWrapper>
        <SectionHeader>Popular movies</SectionHeader>
        <PopularMovies>
         {popularMovies.map((movie) => (
          <Tile
           genres={genres}
           key={nanoid()}
           movie={movie}
          />
         ))}
        </PopularMovies>
       </PopularMoviesWrapper>
       <Pagination
        containerRef={containerRef}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
       />
      </>
     )
    }[status]
   }
  </Container>
 );
};
