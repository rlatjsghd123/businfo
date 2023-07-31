import React from 'react';

function Loding() {
  console.log('로딩 컴포넌트');
  return (
    <div className='loading'>
      <img src={process.env.PUBLIC_URL + 'img/1488.gif'} alt='loading' />
      <span>Loading</span>
    </div>
  );
}

export default Loding;
