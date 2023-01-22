import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 90%;
  margin: 0 auto;
  padding: 3rem 0;
  font-size: 1.6rem;
`;

export const Name = styled.p`
  &:hover {
    cursor: pointer;
  }
`;

export const SpanName = styled.span`
  color: #c8023f;
  font-weight: bold;
`;

export const Ul = styled.ul`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  align-items: center;
`

export const Li = styled.li`
  &:hover {
    cursor: pointer;
    color: #c8023f;
  }
`;
