import styled from 'styled-components';

export const BusStartEndUl = styled.ul`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-bottom: 3px;
`;

export const BusStartEndLi = styled.li<{ station: boolean }>`
  ${({ station }) =>
    station &&
    `color: #000;
  font-weight: bold;
  background-color: #f5f5f5;`}
`;
