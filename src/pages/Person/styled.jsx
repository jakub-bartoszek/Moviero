import styled from "styled-components";

export const Container = styled.div`
 max-width: 1400px;
 margin: 0 auto;
 padding: 88px 16px 16px;
 height: 100%;
`;

export const ImageWrapper = styled.div`
 height: 100%;
 aspect-ratio: 2 / 3;
 background-color: black;
`;

export const Name = styled.h1`
 margin: 0;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 24px;
 }
`;

export const Banner = styled.div`
 width: 100%;
 border: 1px solid ${({ theme }) => theme.colors.site.background};
 display: grid;
 grid-template-columns: 30% 70%;
 gap: 16px;
`;

export const Image = styled.img`
 width: 100%;
`;

export const SectionWrapper = styled.section`
 width: 100%;
 padding-bottom: 16px;
`;

export const SectionHeader = styled.h2`
 width: 100%;
 font-size: 32px;
 margin: 0;
 padding: 24px 0 12px 0;
`;

export const Cast = styled.ul`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
 gap: 16px;
 list-style: none;
 padding: 0;
`;

export const PersonDetails = styled.div`
 display: flex;
 flex-direction: column;
 gap: 8px;
`;

export const Birthdate = styled.div`
 &::before {
  content: "Date of birth: ";
  color: ${({ theme }) => theme.colors.site.mutedText};
 }
`;

export const Birthplace = styled.div`
 &::before {
  content: "Place of birth: ";
  color: ${({ theme }) => theme.colors.site.mutedText};
 }
`;

export const Biography = styled.div`
 grid-column: 1 / span 2;
`;
