import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.nav`
 width: 100%;
 background: rgb(0, 34, 44);
 background: linear-gradient(
  0deg,
  rgba(0, 34, 44, 0.4013921113689095) 0%,
  rgba(0, 34, 44, 1) 100%
 );
 height: 72px;
 color: white;
 border-bottom: 2px solid #ffffff30;
`;

export const Container = styled.div`
 height: 100%;
 margin: 0 auto;
 height: 100%;
 max-width: 1400px;
 padding: 0 16px;
 color: white;
 display: grid;
 align-items: center;
 justify-content: space-between;
	gap: 16px;
 grid-template-columns: min-content auto minmax(auto, 33%);
`;

export const Links = styled.div`
 display: flex;
 justify-content: space-around;
 gap: 32px;
 align-items: center;
`;

export const StyledLink = styled(Link)`
 text-decoration: none;
 color: inherit;
 font-size: 16px;
 font-weight: 400;
 padding: 16px;
 color: white;
`;
