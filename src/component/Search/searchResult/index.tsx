import React from 'react';
import * as S from './style';
import StationSearchResult from '../../../content/result/StationSearchResult';
import BusSearchResult from '../../../content/result/BusNumSearchResult';

function SearchResult() {
  return (
    <S.SearchResultDiv>
      <S.InnerSearchResultDiv>
        <div>
          <BusSearchResult />
        </div>
        <div>
          <StationSearchResult />
        </div>
      </S.InnerSearchResultDiv>
    </S.SearchResultDiv>
  );
}

export default SearchResult;
