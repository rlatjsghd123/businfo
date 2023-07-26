import React from 'react';
import SearchResult from './SearchResult';
import Searchbar from './Searchbar';
import '../../scss/BusSearch.scss';
function BusSearch() {
  return (
    <div className='search_box'>
      <Searchbar />
      <SearchResult />
    </div>
  );
}

export default BusSearch;
