import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(NavLink)`
 display: flex;
 padding: 0;
 margin: 0;
 justify-content: start;
 align-items: center;
 font-size: 32px;
 font-weight: 700;
 color: rgb(0, 255, 255);
 text-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
 text-decoration: none;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 24px;
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  display: none;
 }
`;
