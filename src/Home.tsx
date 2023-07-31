import React from 'react';
import Header from './component/Header';
import BusLocationInfo from './component/map/BusLocationInfo';
import BusSearch from './component/Search/BusSearch';

function Home() {
  return (
    <>
      <Header />
      <BusSearch />
      <BusLocationInfo />
    </>
  );
}

export default Home;
