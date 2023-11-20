import styled from 'styled-components';

export const CategoryTitle = styled.h4`
  padding-bottom: 3px;
  margin-bottom: 3px;
  border-bottom: 3px solid #8d8d8d;
`;

export const Category = styled.span`
  cursor: pointer;
  font-size: 10px;
  margin-right: 5px;
  padding: 1px 3px;
  border-radius: 7px;
  color: #fff;
`;

export const BusNum = styled(Category)`
  color: #000;
  font-size: 12px;
`;

export const Red = styled(Category)`
  background-color: #ff0000;
`;

export const Blue = styled(Category)`
  background-color: blue;
`;

export const Yellow = styled(Category)`
  background-color: yellow;
`;

export const Green = styled(Category)`
  background-color: green;
`;

export const Orange = styled(Category)`
  background-color: #ff7f00;
`;
export const Gray = styled(Category)`
  background-color: #d3d3d3;
`;
