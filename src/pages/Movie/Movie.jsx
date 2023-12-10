import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
 fetchMovie,
 selectMovie,
 selectStatus
} from "../../utils/redux/movieSlice";
import { Loader } from "../../components/Loader/Loader";
import {
 Banner,
 Description,
 Genre,
 Genres,
 MovieDetails,
 OutOf,
 Rate,
 Rating,
 StarIcon,
 Title,
 Votes
} from "./styled";
import { nanoid } from "nanoid";
import { Container } from "../../components/Container/styled";

export const Movie = () => {
 const { id } = useParams();
 const dispatch = useDispatch();
 const movie = useSelector(selectMovie);
 const status = useSelector(selectStatus);
 const genres = movie?.genres?.map((genre) => Object.values(genre)[1]);

 useEffect(() => {
  dispatch(fetchMovie({ movieId: id }));
 }, [dispatch, id]);

 return (
  <>
   {
    {
     error: <>Error</>,
     loading: <Loader />,
     success: (
      <Container>
       <Banner
        key={movie.id}
        $bgImage={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
       >
        <MovieDetails>
         <Title>{movie.title}</Title>
         <Genres>
          {genres?.map((genre) => (
           <Genre key={nanoid()}>{genre}</Genre>
          ))}
         </Genres>
         <Rating>
          <StarIcon />
          <Rate>
           {movie.vote_average}/<OutOf>10</OutOf>
           <Votes>&nbsp;{movie.vote_count} votes</Votes>
          </Rate>
         </Rating>
         <Description>{movie.overview}</Description>
        </MovieDetails>
       </Banner>
      </Container>
     )
    }[status]
   }
  </>
 );
};
