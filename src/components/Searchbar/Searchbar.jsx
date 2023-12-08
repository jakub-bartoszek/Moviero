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
 fetchSearchResults,
 selectSearchQuery,
 selectSearchResults,
 selectSearchStatus,
 setSearchQuery
} from "../../utils/redux/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { SearchTile } from "../SearchTile/SearchTile";
import { Loader } from "../Loader/Loader";

export const Searchbar = () => {
  const inputRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const searchQuery = useSelector(selectSearchQuery);
  const searchResults = useSelector(selectSearchResults);
  const status = useSelector(selectSearchStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchResults({ searchQuery: searchQuery }));
  }, [dispatch, searchQuery]);

  const handleSearchIconClick = () => {
    setIsExpanded(true);
    inputRef.current.focus();
  };

  const handleOutsideClick = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setIsExpanded(false);
      dispatch(setSearchQuery(""));
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <Container>
      <Wrapper ref={wrapperRef} isExpanded={isExpanded}>
        <SearchIconWrapper onClick={handleSearchIconClick}>
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
            {status === 'error' && <ResultStatus>Error</ResultStatus>}
            {status === 'loading' && (
              <ResultStatus>
                <Loader />
              </ResultStatus>
            )}
            {status === 'success' && (
              <>
                {searchResults.length ? (
                  searchResults.map((movie) => (
                    <SearchTile key={nanoid()} movie={movie} />
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
