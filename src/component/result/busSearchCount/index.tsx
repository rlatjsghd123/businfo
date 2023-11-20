import React from 'react';
import * as S from './style';
import {
  TypeCurrentItem,
  TypeStaitionList,
  TypeStation,
} from '../../../type/type';

interface BusSearchCountProps {
  moreList: [TypeCurrentItem] | [TypeStaitionList];
  text: string;
  noResult: string;
}

function BusSearchCount({ text, moreList, noResult }: BusSearchCountProps) {
  return (
    <S.BusCountTitle>
      {text}
      {Array.isArray(moreList)
        ? moreList.length
        : noResult === '결과가 없습니다.'
          ? 0
          : 1}
      건
    </S.BusCountTitle>
  );
}

export default React.memo(BusSearchCount);
