import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.nav`
 width: 100%;
 height: 72px;
 background-color: black;
 color: white;
`;

export const Container = styled.div`
 height: 100%;
 margin: 0 auto;
 max-width: 1400px;
 color: white;
 display: flex;
 align-items: center;
 justify-content: space-around;
`;

export const StyledLink = styled(Link)`
 text-decoration: none;
 color: inherit;
`;
