import styled from "styled-components";

export const AlignProjects = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;
export const Ul = styled.ul`
  display: flex;
  gap: 3rem;
`;

export const Li = styled.li`
  min-width: 300px;
  min-height: 300px;
  opacity: .3;
  transition: all 0.3s ease;
  border-radius: 1rem;

  &:hover {
    opacity: 1;
    scale: 1.1;
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    border: 3px solid #2c3240;
  }
`;

export const LiImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 0;
`;

export const LiText = styled.p`
  font-size: 1.2rem;
  padding: 1rem;
`

export const Button = styled.button`
  width: 40%;
  padding: 1rem;
  background-color: transparent;
  border: 1px solid rgb(200, 2, 63);
  border-radius: .5rem;
  font-size: 1.2rem;
  color: rgb(200, 2, 63);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fcd3d3;
  }
`;