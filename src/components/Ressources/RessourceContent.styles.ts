import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 768px) {
    margin-left: 32px;
  }
`;

export const Title = styled.h1`
  color: #000074;
  font-size: 43px;
  line-height: 44px;
  font-weight: 400;
  margin: 64px 0;
`;

export const Description = styled.div`
  color: #000074;
  margin: 32px 0;
  li {
    cursor: pointer;
  }
`;
