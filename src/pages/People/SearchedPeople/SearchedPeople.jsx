import { nanoid } from "nanoid";
import { Container, PopularPeopleList } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader } from "../../../components/Loader/Loader";
import { Pagination } from "../../../components/Pagination/Pagination";
import { PersonTile } from "../../../components/PersonTile/PersonTile";
import { VerticalSection } from "../../../components/VerticalSection/styled";
import { SectionHeader } from "../../../components/SectionHeader/styled";
import {
 fetchSearchResults,
 selectSearchResults,
 selectSearchStatus,
 selectTotalPages,
 selectTotalResults
} from "../../../utils/redux/searchSlice";

export const SearchedPeople = () => {
 const dispatch = useDispatch();
 const searchResults = useSelector(selectSearchResults);
 const status = useSelector(selectSearchStatus);
 const [searchParams, setSearchParams] = useSearchParams();
 const containerRef = useRef(null);
 const totalPages = useSelector(selectTotalPages);
 const totalResults = useSelector(selectTotalResults);

 useEffect(() => {
  searchParams.set("page", 1);
  setSearchParams(searchParams);
 }, [searchParams, setSearchParams]);

 useEffect(() => {
  if (searchParams.get("page")) {
   dispatch(
    fetchSearchResults({
     searchQuery: searchParams.get("search"),
     page: searchParams.get("page"),
     category: "person"
    })
   );
  }
 }, [searchParams, dispatch]);

 switch (status) {
  case "success":
   return (
    <Container ref={containerRef}>
     {searchResults.length && (
      <VerticalSection>
       <SectionHeader>
        {`Search results for "${searchParams.get("search")}" (${totalResults})`}
       </SectionHeader>
       <PopularPeopleList>
        {searchResults.map((person) => (
         <PersonTile
          key={nanoid()}
          person={person}
         />
        ))}
       </PopularPeopleList>
      </VerticalSection>
     )}
     <Pagination
      containerRef={containerRef}
      searchParams={searchParams}
      setSearchParams={setSearchParams}
      totalPages={totalPages}
     />
    </Container>
   );
  case "loading":
   return <Loader />;
  default:
   return <>Error</>;
 }
};
