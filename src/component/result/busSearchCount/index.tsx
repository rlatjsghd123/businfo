import React from 'react';
import { TypeCurrentItem } from '../../../type/type';

interface BusSearchCountProps {
  moreList: TypeCurrentItem;
  text: string;
  noResult: string;
}

function BusSearchCount({ text, moreList, noResult }: BusSearchCountProps) {
  return (
    <h3>
      {text}
      {Array.isArray(moreList)
        ? moreList.length
        : noResult === '결과가 없습니다.'
        ? 0
        : 1}
      건
    </h3>
  );
}

export default BusSearchCount;
