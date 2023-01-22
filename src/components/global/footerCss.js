import styled from "styled-components";
import { Nav } from "./headerCss";

export const Footer = styled(Nav)`
  justify-content: center;
  font-size: 1.2rem;
  padding: 2rem;
`;

export const FooterAnchor = styled.a`
  font-style: italic;
  color: #2c3240;
  position: relative;

  &:hover {
    cursor: pointer;
  }
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -2px;
    width: 105%;
    height: 1%;
    background-color: #c8023f;
    border-radius: 0.2rem;
    transition: height 0.5s ease;
  }
  &:hover:before {
    height: 120%;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0%;
    left: 0;
    font-style: italic;
    font-weight: 400;
    transition: all 2s ease;
  }
  &:hover:after {
    content: "Richard Passos";
    height: 100%;
    color: #fcd3d3;
  }
`;