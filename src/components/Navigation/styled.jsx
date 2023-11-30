import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.nav`
 width: 100%;
 background-color: black;
 color: white;
`;

export const Container = styled.div`
 margin: 0 auto;
 max-width: 1400px;
 color: white;
`;

export const StyledLink = styled(Link)`
 text-decoration: none;
 color: inherit;
`;
