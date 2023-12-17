import { useDispatch, useSelector } from "react-redux";
import {
 selectGenres,
 selectTotalPages,
} from "../../../utils/redux/moviesSlice";
import {
  fetchSearchResults,
  selectSearchResults,
  selectSearchStatus,
  selectTotalResults
 } from "../../../utils/redux/searchSlice";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../../../components/Pagination/Pagination";
import { Tile } from "../../../components/Tile/Tile";
import { nanoid } from "nanoid";
import { Loader } from "../../../components/Loader/Loader";
import { SearchResultsList, Container } from "./styled";
import { VerticalSection } from "../../../components/VerticalSection/styled";
import { SectionHeader } from "../../../components/SectionHeader/styled";

export const SearchedMovies = () => {
 const dispatch = useDispatch();
 const status = useSelector(selectSearchStatus);
 const searchResults = useSelector(selectSearchResults);
 const genres = useSelector(selectGenres);
 const [searchParams, setSearchParams] = useSearchParams();
 const containerRef = useRef(null);
 const totalPages = useSelector(selectTotalPages);
 const totalResults = useSelector(selectTotalResults);

 useEffect(() => {
  searchParams.set("page", 1);
  setSearchParams(searchParams);
 }, []);

 useEffect(() => {
  if (searchParams.get("page")) {
   dispatch(
    fetchSearchResults({
     searchQuery: searchParams.get("search"),
     page: searchParams.get("page"),
     category: "movie"
    })
   );
  }
 }, [searchParams, dispatch]);

 switch (status) {
  case "success":
   return (
    <Container ref={containerRef}>
     {searchResults.length ? (
      <>
       <VerticalSection>
        <SectionHeader>
         {`Search results for "${searchParams.get(
          "search"
         )}" (${totalResults})`}
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
       </VerticalSection>
       <Pagination
        containerRef={containerRef}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        totalPages={totalPages}
       />
      </>
     ) : (
      <VerticalSection>
       <SectionHeader>
        {`No earch results for "${searchParams.get("search")}"`}
       </SectionHeader>
      </VerticalSection>
     )}
    </Container>
   );
  case "loading":
   return <Loader />;
  default:
   return <>Error</>;
 }
};
