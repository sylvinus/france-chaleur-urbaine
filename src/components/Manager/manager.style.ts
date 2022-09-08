import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1700px;
  margin: auto;
  padding: 16px;
`;

export const Filters = styled.div`
  display: flex;
  gap: 16px 32px;
  flex-wrap: wrap;
  & > div {
    width: 350px;
    margin-bottom: 0 !important;
  }
`;

export const NoResult = styled.div`
  margin-top: 16px;
  font-size: 18px;
  font-weight: bold;
`;

export const Distance = styled.div`
  width: 70px;
`;

export const TableContainer = styled.div`
  overflow: scroll;
  height: calc(100vh - 166px);
  & table {
    max-height: 100% !important;
    & th,
    & td {
      padding: 0.5rem !important;
    }
  }
  & > div {
    width: fit-content;
  }
`;
