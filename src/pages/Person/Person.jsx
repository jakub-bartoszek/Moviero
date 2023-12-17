import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
 fetchPerson,
 selectPerson,
 selectPersonCredits,
 selectStatus
} from "../../utils/redux/personSlice";
import { useEffect } from "react";
import {
 Banner,
 Biography,
 Birthdate,
 Birthplace,
 Cast,
 Container,
 Image,
 ImageWrapper,
 Name,
 PersonDetails,
 SectionHeader,
 SectionWrapper
} from "./styled";
import { Tile } from "../../components/Tile/Tile";
import { nanoid } from "nanoid";
import { Loader } from "../../components/Loader/Loader";

export const Person = () => {
 const { id } = useParams();
 const dispatch = useDispatch();
 const person = useSelector(selectPerson);
 const personCredits = useSelector(selectPersonCredits);
 const status = useSelector(selectStatus);

 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

 useEffect(() => {
  dispatch(fetchPerson({ personId: id }));
 }, [dispatch, id]);

 switch (status) {
  case "success":
   return (
    <Container>
     <Banner>
      <ImageWrapper>
       <Image
        src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
       />
      </ImageWrapper>
      <PersonDetails>
       <Name>{person.name}</Name>
       <Birthdate>{person.birthday}</Birthdate>
       <Birthplace>{person.place_of_birth}</Birthplace>
      </PersonDetails>
      <Biography>{person.biography}</Biography>
     </Banner>
     {personCredits.cast?.length && (
      <SectionWrapper>
       <SectionHeader>Cast</SectionHeader>
       <Cast>
        {personCredits.cast.map((movie) => (
         <Tile
          key={nanoid()}
          movie={movie}
         />
        ))}
       </Cast>
      </SectionWrapper>
     )}
     {personCredits.crew?.length && (
      <SectionWrapper>
       <SectionHeader>Crew</SectionHeader>
       <Cast>
        {personCredits.cast.map((movie) => (
         <Tile
          key={nanoid()}
          movie={movie}
         />
        ))}
       </Cast>
      </SectionWrapper>
     )}
    </Container>
   );
  case "loading":
   return <Loader />;
  default:
   return <>Error</>;
 }
};
