import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/icons/star.svg";

export const Wrapper = styled.li`
 display: grid;
 grid-template-rows: auto 1fr;
 color: white;
 padding: 0;
 background-color: rgb(0, 34, 44);
 border-radius: 5px;
 transition: all 0.3s;
 cursor: pointer;

 &:hover {
  scale: 102%;
  box-shadow: 0 50px 50px 0 #00000080;
  z-index: 1;
 }
`;

export const PosterWrapper = styled.div`
 width: 100%;
 aspect-ratio: 6/9;
 display: flex;
`;

export const Poster = styled.img`
 width: 100%;
 height: 100%;
 border-radius: 5px 5px 0 0;
`;

export const Content = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding: 8px;
 gap: 8px;
 font-size: 20px;
 height: 100%;
`;

export const Info = styled.div`
 display: flex;
 flex-direction: column;
 gap: 8px;
`;

export const Title = styled.div``;

export const Year = styled.div`
 color: grey;
`;

export const Genres = styled.ul`
 list-style: none;
 padding: 0;
 display: flex;
 flex-wrap: wrap;
 gap: 8px;
`;

export const Genre = styled.li`
 background-color: #00000040;
 padding: 6px;
 font-size: 14px;
 border-radius: 5px;
`;

export const Rating = styled.div`
 display: flex;
 flex-wrap: wrap;
 align-items: center;
 column-gap: 8px;
 font-size: 16px;
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
`;
