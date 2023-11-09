import React from 'react';
import * as S from './style';
import { FaBus } from 'react-icons/fa';

function Header() {
  return (
    <S.Header>
      <S.Title>
        <FaBus />
        서울버스정보
      </S.Title>
    </S.Header>
  );
}

export default Header;
