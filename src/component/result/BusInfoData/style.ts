import styled from 'styled-components';

export const BusInfoBox = styled.div`
  border: 1px solid #888;
  margin: 10px;
  padding: 12px 12px 0 12px;
  &:hover {
    background-color: #f9f9f9;
  }
  font-size: 12px;
`;

export const StartEnd = styled.p`
  padding: 5px 0;
`;

export const CorpNm = styled.p`
  margin-bottom: 7px;
`;

export const BusTime = styled.ul`
  font-size: 12px;
`;

export const TimeList = styled.li`
  &:last-child {
    margin-bottom: 8px;
  }
`;
