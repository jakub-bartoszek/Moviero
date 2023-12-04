import styled from "styled-components";

export const BannerWrapper = styled.div`
 box-shadow: inset 0px 0px 80px 100px #00141a, inset 0px 0px 50px 50px #00141a;
 width: 100%;
 height: 90vw;
 max-height: 600px;
`;

export const Banner = styled.img`
 border-radius: 50px;
 position: relative;
 width: 100%;
 height: 100%;
 object-fit: cover;
 object-position: top;
 z-index: -1;
 max-height: 600px;
`;

export const SimilarMovies = styled.ul`
 list-style-type: none;
 display: flex;
 padding: 16px 16px 16px 0;
 gap: 16px;
 overflow-y: hidden;
 height: 300px;
 align-items: center;
 position: relative;
 scroll-behavior: smooth;

 &::-webkit-scrollbar {
  height: 10px;
 }

 &::-webkit-scrollbar-track {
  background: transparent;
 }

 &::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
 }

 &::-webkit-scrollbar-thumb:hover {
  background: #555;
 }
`;

export const PosterWrapper = styled.li`
 height: 95%;
 transition: all 0.3s;

 &:hover {
  height: 100%;
 }
`;

export const Poster = styled.img`
 height: 100%;
`;
