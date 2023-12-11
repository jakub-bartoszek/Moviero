import { useEffect, useRef, useState } from "react";
import {
 Container,
 Input,
 ResultList,
 ResultStatus,
 SearchIcon,
 SearchIconWrapper,
 Wrapper
} from "./styled";
import {
 fetchSearchbarResults,
 selectSearchQuery,
 selectSearchbarResults,
 selectSearchStatus,
 setSearchQuery
} from "../../utils/redux/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { SearchTile } from "../SearchTile/SearchTile";
import { Loader } from "../Loader/Loader";
import { useSearchParams } from "react-router-dom";

export const Searchbar = () => {
 const searchQuery = useSelector(selectSearchQuery);
 const searchbarResults = useSelector(selectSearchbarResults);
 const status = useSelector(selectSearchStatus);
 const [isExpanded, setIsExpanded] = useState(false);
 const [searchParams, setSearchParams] = useSearchParams();
 const inputRef = useRef(null);
 const wrapperRef = useRef(null);

 const dispatch = useDispatch();

 useEffect(() => {
  document.addEventListener("mousedown", handleOutsideClick);

  return () => {
   document.removeEventListener("mousedown", handleOutsideClick);
  };
 }, []);

 useEffect(() => {
  if (searchQuery !== "") {
   dispatch(fetchSearchbarResults({ searchQuery: searchQuery, page: 1 }));
  }
 }, [dispatch, searchQuery]);

 const handleOutsideClick = (e) => {
  if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
   setIsExpanded(false);
   dispatch(setSearchQuery(""));
  }
 };

 const switchSearchbar = () => {
  setIsExpanded(!isExpanded);
  inputRef.current.focus();
 };

 const onFormSubmit = (e) => {
  e.preventDefault();
  searchParams.set("search", searchQuery);
  searchParams.set("page", 1);
  setSearchParams(searchParams);
  switchSearchbar();
 };

 return (
  <Container>
   <Wrapper
    onSubmit={(e) => onFormSubmit(e)}
    ref={wrapperRef}
    $isExpanded={isExpanded}
   >
    <SearchIconWrapper onClick={switchSearchbar}>
     <SearchIcon />
    </SearchIconWrapper>
    <Input
     value={searchQuery}
     onChange={(e) => dispatch(setSearchQuery(e.target.value))}
     ref={inputRef}
     placeholder="Search for movies..."
    />
    {isExpanded && searchQuery && (
     <ResultList>
      {status === "error" && <ResultStatus>Error</ResultStatus>}
      {status === "loading" && (
       <ResultStatus>
        <Loader />
       </ResultStatus>
      )}
      {status === "success" && (
       <>
        {searchbarResults.length ? (
         searchbarResults.map((movie) => (
          <SearchTile
           switchSearchbar={switchSearchbar}
           key={nanoid()}
           movie={movie}
          />
         ))
        ) : (
         <ResultStatus>No results...</ResultStatus>
        )}
       </>
      )}
     </ResultList>
    )}
   </Wrapper>
  </Container>
 );
};
