import styled from 'styled-components';

export const BusStartEndUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  border-bottom: 3px solid #000;
`;

export const BusStartEndLi = styled.li<{ station: boolean }>`
  padding: 8px 0;
  cursor: pointer;
  ${({ station }) =>
    station &&
    `color: #000;
  font-weight: bold;
  background-color: #f5f5f5;`}
`;
