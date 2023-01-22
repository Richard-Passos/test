import styled from "styled-components";

export const IndexMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 20rem;
  margin-bottom: 2rem;
`;

export const DinamicSpan = styled.span`
  color: #c8023f;
`;

export const Button = styled.button`
  color: #c8023f;
  width: 25%;
  font-size: 1.8rem;
  padding: 1.5rem;
  border: 1px solid #c8023f;
  border-radius: 0.5rem;
  background: none;
  &:hover {
    background-color: #fcd3d3;
  }
`;