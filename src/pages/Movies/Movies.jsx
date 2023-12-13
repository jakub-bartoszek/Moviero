import { useEffect, useRef } from "react";
import { Container } from "../../components/Container/styled";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";

import { PopularMovies } from "./PopularMovies/PopularMovies";
import { SearchedMovies } from "./SearchedMovies/SearchedMovies";

export const Movies = () => {
 const [searchParams, setSearchParams] = useSearchParams();
 
 useEffect(() => {
  window.scrollTo(0,0)
},[])

 return (
  <Container>
   {searchParams.get("search") ? <SearchedMovies /> : <PopularMovies />}
  </Container>
 );
};
