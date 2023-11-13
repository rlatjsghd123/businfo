import React from 'react';
import * as S from './style';
interface BusNoDataProps {
  text: string;
}

function BusNoData({ text }: BusNoDataProps) {
  return (
    <>
      <S.Title>{text}</S.Title>
      <S.BusUl>
        <S.BusList></S.BusList>
      </S.BusUl>
    </>
  );
}

export default React.memo(BusNoData);
