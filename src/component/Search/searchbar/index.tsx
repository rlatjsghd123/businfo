import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import * as S from './style';
interface SearchProps {
  getSearch: (e: any) => void;
  setSearch: any;
  search: string;
}

function Searchbar({ getSearch, setSearch, search }: SearchProps) {
  return (
    <>
      <S.SearchBar>
        <S.SearchForm className="search_form" onSubmit={getSearch}>
          <fieldset>
            <legend className="blind">버스검색창</legend>
            <S.SearchInput
              type="text"
              title="검색"
              autoFocus
              placeholder="버스번호,정류장명"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <S.Button type="submit">
              <FaSearch />
            </S.Button>
          </fieldset>
        </S.SearchForm>
      </S.SearchBar>
    </>
  );
}

export default Searchbar;
