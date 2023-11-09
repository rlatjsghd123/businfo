import React from 'react';
import Header from '../../component/header/index';
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
