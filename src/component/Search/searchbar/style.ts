import styled from 'styled-components';

export const SearchBar = styled.div`
  position: relative;
  margin: 10px 0;
  font-size: 12px;
`;

export const SearchForm = styled.form`
  width: 90%;
  margin: 0 auto;
`;

export const Button = styled.button`
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  top: 45%;
  right: 8%;
  color: #ffad62;
  background: transparent;
  border: none;
`;

export const SearchInput = styled.input`
  &:focus {
    outline: none;
  }
  &::-webkit-input-placeholder {
    font-size: 10px;
  }
  font-size: 12px;
  padding-left: 20px;
  margin-top: 0.5rem;
  height: 30px;
  border-radius: 20px;
  width: 100%;
  border: 2px solid #ffad62;
`;
