import React from 'react';
import * as S from './style';
import SearchResult from '../../component/Search/searchResult';
import Searchbar from '../../component/Search/searchbar';
import useSearch from 'hook/search/useSearch';

function BusSearch() {
  const { getSearch, setSearch, search } = useSearch();
  return (
    <S.SearchDiv>
      <Searchbar getSearch={getSearch} setSearch={setSearch} search={search} />
      <SearchResult />
    </S.SearchDiv>
  );
}

export default BusSearch;
