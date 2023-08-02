import React from 'react';

function Loding() {
  return (
    <div className='loading'>
      <img src={process.env.PUBLIC_URL + 'img/1488.gif'} alt='loading' />
      <span>Loading</span>
    </div>
  );
}

export default Loding;
