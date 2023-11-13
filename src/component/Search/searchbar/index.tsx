import React, { SetStateAction } from 'react';
import { FaSearch } from 'react-icons/fa';
import * as S from './style';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import Loding from '../../Loading';
interface SearchProps {
  setSearch: SetStateAction<any>;
  search: string;
  getSearch: (e: React.MouseEvent<HTMLFormElement>) => void;
}

function Searchbar({ setSearch, search, getSearch }: SearchProps) {
  const loading = useSelector((state: RootState) => state.loading.loading);
  return (
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
      {loading && <Loding />}
    </S.SearchBar>
  );
}

export default Searchbar;
