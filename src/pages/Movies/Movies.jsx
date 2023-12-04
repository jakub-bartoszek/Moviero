import { useEffect, useRef, useState } from "react";
import { Container } from "../../components/Container/styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopular, selectData } from "../../utils/redux/dataSlice";
import {
 Banner,
 BannerWrapper,
 Poster,
 PosterWrapper,
 SimilarMovies
} from "./styled";

export const Movies = () => {
 const dispatch = useDispatch();
 const movies = useSelector(selectData);
 const [currentMovie, setCurrentMovie] = useState(movies[0] || {});

 const handleClickScroll = (e) => {
  const element = e.target;
  if (element) {
   element.scrollIntoView({ behavior: "smooth", inline: "center" });
  }
 };

 useEffect(() => {
  dispatch(fetchPopular());
 }, []);

 useEffect(() => {
  setCurrentMovie(movies[0]);
 }, [movies]);

 return (
  <Container>
   <BannerWrapper>
    <Banner
     src={`https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path}`}
    />
   </BannerWrapper>
   <SimilarMovies>
    {movies.map((movie) => (
     <PosterWrapper
      onClick={(e) => {
       handleClickScroll(e);
       setCurrentMovie(movie);
      }}
      key={movie.id}
     >
      <Poster
       id={movie.id}
       src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      />
     </PosterWrapper>
    ))}
   </SimilarMovies>
  </Container>
 );
};
