import React from 'react';

interface BusNoDataProps {
  text: string;
}

function BusNoData({ text }: BusNoDataProps) {
  return (
    <>
      <h3>{text}</h3>
      <ul className='busNum_list'>
        <li></li>
      </ul>
    </>
  );
}

export default BusNoData;
