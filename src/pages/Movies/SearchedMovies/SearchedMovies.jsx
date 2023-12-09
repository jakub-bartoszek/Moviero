import { useDispatch, useSelector } from "react-redux";
import {
 fetchSearchResults,
 selectGenres,
 selectSearchResults,
 selectStatus
} from "../../../utils/redux/moviesSlice";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../../components/Pagination/Pagination";

import { Tile } from "../../../components/Tile/Tile";
import { nanoid } from "nanoid";
import { Loader } from "../../../components/Loader/Loader";
import { SectionHeader, VerticalMoviesWrapper } from "../styled";
import { SearchResultsList, Container } from "./styled";

export const SearchedMovies = () => {
 const dispatch = useDispatch();
 const status = useSelector(selectStatus);
 const searchResults = useSelector(selectSearchResults);
 const genres = useSelector(selectGenres);

 const [cancel, setCancel] = useState(false);
 const [searchParams, setSearchParams] = useSearchParams();
 const containerRef = useRef(null);

 useEffect(() => {
  searchParams.set("page", 1);
  setSearchParams(searchParams);
 }, []);

 useEffect(() => {
  if (searchParams.get("page")) {
   dispatch(
    fetchSearchResults({
     searchQuery: searchParams.get("search"),
     page: searchParams.get("page")
    })
   );
  }
 }, [searchParams, dispatch]);

 return (
  <Container ref={containerRef}>
   {
    {
     error: <>Error</>,
     loading: <Loader />,
     success: (
      <>
       {searchResults.length ? (
        <>
         <VerticalMoviesWrapper>
          <SectionHeader>
           {`Search results for "${searchParams.get("search")}" (${
            searchResults.length
           })`}
          </SectionHeader>
          <SearchResultsList>
           {searchResults.map((movie) => (
            <Tile
             genres={genres}
             key={nanoid()}
             movie={movie}
            />
           ))}
          </SearchResultsList>
         </VerticalMoviesWrapper>
         <Pagination
          containerRef={containerRef}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
         />
        </>
       ) : (
        <>
         <VerticalMoviesWrapper>
          <SectionHeader>
           {`No earch results for "${searchParams.get("search")}"`}
          </SectionHeader>
         </VerticalMoviesWrapper>
        </>
       )}
      </>
     )
    }[status]
   }
  </Container>
 );
};
