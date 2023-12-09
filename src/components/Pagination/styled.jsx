import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 display: flex;
 gap: 8px;
 justify-content: center;
 align-items: center;
 padding: 24px 0;
 color: white;
`;

export const StyledButton = styled.button`
 color: white;
 height: 32px;
 padding: 0 24px;
 background-color: #00222c;
 border: none;
 border-radius: 10px;
 cursor: pointer;
 transition: all 0.3s;

 &:hover {
  scale: 105%;
  background-color: #003f52;
 }

 &:disabled {
  cursor: auto;
  color: grey;
  scale: 100%;
  background-color: #00222c;
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  padding: 0 26px;
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  height: 20px;
  padding: 0 12px;
 }
`;

export const PageCount = styled.span`
 font-size: 16px;

 @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
  font-size: 14px;
 }

 @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 10px;
 }
`
