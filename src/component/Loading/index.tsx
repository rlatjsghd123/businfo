import React from 'react';
import * as S from './style';

function Loding() {
  return (
    <S.Loading>
      <img src={process.env.PUBLIC_URL + 'img/1488.gif'} alt="loading" />
      <span>Loading</span>
    </S.Loading>
  );
}

export default Loding;
