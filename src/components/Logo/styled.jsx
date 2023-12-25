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
 color: ${({ theme }) => theme.colors.site.primaryText};
 text-shadow: 0 0 15px ${({ theme }) => theme.colors.site.primaryText};;
 text-decoration: none;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 24px;
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  display: none;
 }
`;
