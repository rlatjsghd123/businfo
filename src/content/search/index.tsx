import React from 'react';
import * as S from './style';
import SearchResult from '../../component/Search/SearchResult';
import Searchbar from '../../component/Search/Searchbar';

function BusSearch() {
  return (
    <S.SearchDiv>
      <Searchbar />
      <SearchResult />
    </S.SearchDiv>
  );
}

export default BusSearch;
