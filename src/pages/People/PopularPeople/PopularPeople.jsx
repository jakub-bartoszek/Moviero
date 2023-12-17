import { nanoid } from "nanoid";
import { Container, PopularPeopleList } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import {
 fetchPopularPeople,
 selectPopularPeople,
 selectStatus,
 selectTotalPages
} from "../../../utils/redux/peopleSlice";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader } from "../../../components/Loader/Loader";
import { Pagination } from "../../../components/Pagination/Pagination";
import { PersonTile } from "../../../components/PersonTile/PersonTile";
import { VerticalSection } from "../../../components/VerticalSection/styled";
import { SectionHeader } from "../../../components/SectionHeader/styled";

export const PopularPeople = () => {
 const dispatch = useDispatch();
 const popularPeople = useSelector(selectPopularPeople);
 const status = useSelector(selectStatus);
 const [searchParams, setSearchParams] = useSearchParams();
 const containerRef = useRef(null);
 const totalPages = useSelector(selectTotalPages);

 useEffect(() => {
  searchParams.set("page", 1);
  setSearchParams(searchParams);
 }, []);

 useEffect(() => {
  if (searchParams.get("page")) {
   dispatch(fetchPopularPeople({ page: searchParams.get("page") }));
  }
 }, [searchParams, dispatch]);

 switch (status) {
  case `success`:
   return (
    <Container ref={containerRef}>
     {popularPeople.length && (
      <VerticalSection>
       <SectionHeader>Popular people</SectionHeader>
       <PopularPeopleList>
        {popularPeople.map((person) => (
         <PersonTile key={nanoid()} person={person} />
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
