import React from 'react';
import Header from './component/Header';
import BusLocationInfo from './component/BusLocationInfo';
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
