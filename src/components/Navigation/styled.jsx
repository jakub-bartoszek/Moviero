import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";

export const Wrapper = styled.nav`
 width: 100%;
 background: rgb(0, 34, 44);
 background: linear-gradient(
  0deg,
  rgba(0, 34, 44, 0.5) 0%,
  rgba(0, 34, 44, 1) 100%
 );
 height: 72px;
 color: white;
 border-bottom: 2px solid #ffffff30;
 position: fixed;
 top: 0;
 z-index: 2;
 backdrop-filter: blur(2px);
`;

export const Container = styled.div`
 height: 100%;
 margin: 0 auto;
 max-width: 1400px;
 padding: 0 16px;
 color: white;
 display: grid;
 align-items: center;
 justify-content: space-between;
 gap: 16px;
 grid-template-columns: 1fr 1fr 1fr;
 position: relative;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  grid-template-columns: auto auto 1fr;
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  grid-template-columns: auto 1fr;
 }
`;

export const Links = styled.div`
 display: flex;
 justify-content: space-around;
 gap: 32px;
 align-items: center;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  display: none;
 }
`;

export const StyledNavLink = styled(NavLink)`
 text-decoration: none;
 color: inherit;
 font-size: 16px;
 font-weight: 400;
 padding: 16px;
 color: white;
 white-space: nowrap;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  display: none;
 }
`;

export const MenuHeader = styled.div`
 display: flex;
 align-items: center;
 gap: 8px;
`;

export const MenuButton = styled(Menu)`
 display: none;
 color: cyan;
 height: 32px;
 width: 32px;
 cursor: pointer;

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  display: flex;
 }
`;

export const MenuLogo = styled.div`
 display: flex;
 padding: 0;
 margin: 0;
 justify-content: start;
 align-items: center;
 font-size: 24px;
 font-weight: 700;
 color: rgb(0, 255, 255);
 text-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
 text-decoration: none;
`;

export const Sidebar = styled.div`
 position: absolute;
 display: flex;
 top: 0;
 left: ${({ $isShowed }) => ($isShowed ? "0vw" : "-70vw")};
 height: 100vh;
 width: 70vw;
 background-color: #00222c;
 padding: 20px 16px;
 display: flex;
 flex-direction: column;
 transition: all 0.3s;
 gap: 24px;
 box-shadow: ${({ $isShowed }) =>
  $isShowed ? "0 0 150px 50px black" : "none"};
 z-index: 3;
`;

export const SidebarNavLink = styled(NavLink)`
 text-decoration: none;
 color: inherit;
 font-size: 16px;
 font-weight: 400;
 color: white;
 white-space: nowrap;
 width: 100%;
`;
