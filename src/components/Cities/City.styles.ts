import styled from 'styled-components';

export const CityContainer = styled.div`
  .sticky-form-title {
    color: #2731b1;
  }
`;

export const Title = styled.h2`
  color: #000091;
  b {
    color: #4550e5;
  }
  font-size: 33px;
  font-weight: 600;
  line-height: 51px;
`;

export const Subtitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 30px;
`;

export const Image = styled.img`
  height: 65px;
  width: fit-content;
`;

export const VideoGuideColumn = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  h3 {
    color: #000074;
  }
  iframe {
    aspect-ratio: 16 / 9;
  }
`;

export const SimulatorsContainer = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    margin-bottom: 32px;
  }
  em,
  strong {
    font-size: 16px !important;
    line-height: 24px !important;
  }
  .simulator-result {
    width: 100%;
    color: #000091;
  }
`;

export const CityDescriptionContainer = styled.div`
  div,
  strong {
    color: #000091;
  }
`;

export const DispositifsSlice = styled.div`
  .slice-header h2 {
    max-width: 600px;
    margin: auto;
  }
`;
