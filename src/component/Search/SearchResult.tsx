import React from 'react';
import '../../scss/SearchResult.scss';
import StationSearchResult from '../result/StationSearchResult';
import BusSearchResult from '../../content/result';

function SearchResult() {
  return (
    <div className='search_result'>
      <div className='inner_search_result'>
        <h2 className='search_result'>검색결과</h2>
        <div className='busNum'>
          <BusSearchResult />
        </div>
        <div className='bus_station'>
          <StationSearchResult />
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
