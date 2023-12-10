import { useEffect, useRef, useState } from "react";
import { Logo } from "../Logo/Logo";
import { Searchbar } from "../Searchbar/Searchbar";
import {
 Container,
 Links,
 MenuButton,
 MenuHeader,
 MenuLogo,
 Sidebar,
 SidebarNavLink,
 StyledNavLink,
 Wrapper
} from "./styled";

export const Navigation = () => {
 const [isShowed, setIsShowed] = useState(false);

 const handleButtonClick = (e) => {
  setIsShowed(!isShowed);
 };

 const handleOutsideClick = (e) => {
  if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
   setIsShowed(false);
  }
 };

 useEffect(() => {
  document.addEventListener("mousedown", handleOutsideClick);

  return () => {
   document.removeEventListener("mousedown", handleOutsideClick);
  };
 }, []);

 const sidebarRef = useRef(null);
 return (
  <Wrapper>
   <Sidebar
    $isShowed={isShowed}
    ref={sidebarRef}
   >
    <MenuHeader>
     <MenuButton onClick={handleButtonClick} />
     <MenuLogo to="/people">Moviero</MenuLogo>
    </MenuHeader>

    <SidebarNavLink to="/movies">Movies</SidebarNavLink>
    <SidebarNavLink to="/people">People</SidebarNavLink>
    <SidebarNavLink to="/tvshows">TV Shows</SidebarNavLink>
   </Sidebar>
   <Container>
    <MenuButton onClick={handleButtonClick} />
    <Logo />
    <Links>
     <StyledNavLink to="/movies">Movies</StyledNavLink>
     <StyledNavLink to="/people">People</StyledNavLink>
     <StyledNavLink to="/tvshows">TV Shows</StyledNavLink>
    </Links>
    <Searchbar />
   </Container>
  </Wrapper>
 );
};
