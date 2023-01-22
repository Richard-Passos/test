import styled from "styled-components";

export const Section = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Span = styled.span`
font-size: 1.4rem;
  color: #c8023f;
`;
export const Title = styled.h2`
  font-size: 5rem;
  font-weight: bold;
  font-style: oblique;
`;

export const Subtitle = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  align-self: center;
`;

export const Text = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  margin-bottom: .5rem;
`;

export const Section50 = styled(Section)`
  justify-content: center;
  gap: 2rem;
`