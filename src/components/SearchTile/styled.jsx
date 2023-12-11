import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import { Link } from "react-router-dom";

export const Wrapper = styled.li``;

export const StyledLink = styled(Link)`
 display: grid;
 grid-template-columns: 20% 80%;
 color: white;
 padding: 0;
 background-color: rgb(0, 34, 44);
 transition: all 0.3s;
 cursor: pointer;
 text-decoration: none;
`;

export const PosterWrapper = styled.div`
 width: 100%;
 aspect-ratio: 6/9;
 display: flex;

 background-color: black;
`;

export const Poster = styled.img`
 width: 100%;
 height: 100%;
`;

export const Content = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding: 8px;
 gap: 8px;
 height: 100%;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  padding: 4px;
  gap: 4px;
 }
`;

export const Info = styled.div`
 display: flex;
 flex-direction: column;
 gap: 8px;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  gap: 4px;
 }
`;

export const Title = styled.div`
 font-size: 20px;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 16px;
 }
`;

export const Year = styled.div`
 color: grey;
 font-size: 16px;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 12px;
 }
`;

export const Rating = styled.div`
 display: flex;
 flex-wrap: wrap;
 align-items: center;
 column-gap: 8px;
 font-size: 16px;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 12px;
 }
`;

export const Rate = styled.div``;

export const Votes = styled.div`
 color: grey;

 &::after {
  content: " votes";
 }
`;

export const StarIcon = styled(Star)`
 height: 16px;
 color: yellow;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  height: 12px;
 }
`;
