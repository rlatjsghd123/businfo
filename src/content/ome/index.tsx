import React from 'react';
import Header from '../../component/header';
import BusLocation from '../map';
import BusSearch from '../search';

function Home() {
  return (
    <>
      <Header />
      <BusSearch />
      <BusLocation />
    </>
  );
}

export default Home;
