import styled from 'styled-components';

export const BusStationUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  height: 350px;
`;

export const BusStationLi = styled.li<{ selected: boolean; station: boolean }>`
  background-color: #f7f7f7;
  font-weight: bold;
  ${({ selected }) =>
    selected &&
    `background-color: #f7f7f7;
  font-weight: bold;`}
  ${({ station }) =>
    station
      ? `  display: none;`
      : ` display: bolck;
    text-indent: 3px;
    width: 100%;
    border-bottom: 1px solid #e9e9e9;
    font-size: 12px;
    padding: 5px 0;
    cursor: pointer;
    &:hover {
      background-color: #f7f7f7;
      font-weight: bold;
    }`}
`;
