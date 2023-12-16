import { useEffect } from "react";
import { Container } from "../../components/Container/styled";
import { useSearchParams } from "react-router-dom";

import { PopularPeople } from "./PopularPeople/PopularPeople";
import { useDispatch } from "react-redux";
import { setCategory } from "../../utils/redux/searchSlice";

export const People = () => {
 const [searchParams, setSearchParams] = useSearchParams();
 const dispatch = useDispatch();

 useEffect(() => {
  window.scrollTo(0, 0);
  dispatch(setCategory("person"));
 }, []);

 return (
  <Container>
   <PopularPeople />
  </Container>
 );
};
