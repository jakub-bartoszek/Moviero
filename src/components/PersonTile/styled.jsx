import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.li``;

export const StyledLink = styled(Link)`
 display: grid;
 grid-template-rows: auto 1fr;
 color: ${({ theme }) => theme.colors.site.text};
 padding: 0;
 background-color: ${({ theme }) => theme.colors.tile.background};
 border-radius: 5px;
 transition: all 0.3s;
 cursor: pointer;
 height: 100%;
 text-decoration: none;

 &:hover {
  background-color: ${({ theme }) => theme.colors.tile.hoverBackground};
 }
`;

export const ImageWrapper = styled.div`
 aspect-ratio: 6/9;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: black;
 border-radius: 5px 5px 0 0;
`;

export const Image = styled.img`
 width: 100%;
 border-radius: 5px 5px 0 0;
`;

export const Content = styled.div`
 display: flex;
 justify-content: space-between;
 flex-direction: column;
 align-items: center;
 height: 100%;
 overflow: hidden;
 padding: 8px;
 text-align: center;

 @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
  gap: 6px;
 }
`;

export const Name = styled.p``;

export const Role = styled.p`
 color: ${({ theme }) => theme.colors.site.textMuted};
`;

export const Job = styled.p`
 color: ${({ theme }) => theme.colors.site.textMuted};
`;
