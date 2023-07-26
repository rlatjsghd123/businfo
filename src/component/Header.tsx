import React from 'react';
import '../scss/Header.scss';
import { FaBus } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <h1>
        <FaBus />
        서울버스정보
      </h1>
    </header>
  );
}

export default Header;
