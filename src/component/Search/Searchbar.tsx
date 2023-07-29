import React, { useState } from 'react';
import '../../scss/Searchbar.scss';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { xml2json } from 'xml-js';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store/store';

function Searchbar() {
  const [loading, setLoding] = useState(false);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const stationSelector = useSelector(
    (state: RootState) => state.busInfo.station
  );
  const busNumSelector = useSelector(
    (state: RootState) => state.busInfo.busNum
  );

  const getStationByName = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoding(true);
    if (search === '') {
      return alert('검색어를 입력해주세요.');
    }
    if (stationSelector) {
      dispatch({
        type: 'busInfoReducer/StationSearched',
      });
    }
    const res = await axios.get(
      `http://ws.bus.go.kr/api/rest/stationinfo/getStationByName?ServiceKey=${process.env.REACT_APP_SEOUL_BUS_API_KEY}&stSrch=${search}`
    );
    try {
      const options = {
        compact: true,
        ignoreComment: true,
        spaces: 4,
      };
      const jsonData = xml2json(res.data, options);
      const json = JSON.parse(jsonData);

      dispatch({
        type: 'busInfoReducer/StationSearched',
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }

    if (busNumSelector) {
      // 버스번호 초기화
      dispatch({
        type: 'busInfoReducer/BusNumSearched',
        payload: null,
      });
      // 버스번호 클릭시 더보기 끄기
      dispatch({
        type: 'busInfoReducer/MoreClose',
      });
      // 지도에 표시된 마커
      dispatch({
        type: 'busInfoReducer/BusStationInfo',
      });
      // 정류장클릭시 정보element 끄기
      dispatch({
        type: 'busInfoReducer/StationMoreClose',
      });
    }

    const res2 = await axios.get(
      `http://ws.bus.go.kr/api/rest/busRouteInfo/getBusRouteList?ServiceKey=${process.env.REACT_APP_SEOUL_BUS_API_KEY}&strSrch=${search}`
    );
    try {
      const options = {
        compact: true,
        ignoreComment: true,
        spaces: 4,
      };
      const jsonData = xml2json(res2.data, options);
      const json = JSON.parse(jsonData);

      dispatch({
        type: 'busInfoReducer/BusNumSearched',
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }
    setSearch('');
    setLoding(false);
  };

  return (
    <div className='search'>
      <form className='search_form' onSubmit={getStationByName}>
        <fieldset>
          <legend className='blind'>버스검색창</legend>
          <input
            type='text'
            title='검색'
            autoFocus
            placeholder='버스번호,정류장명'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit'>
            <FaSearch />
          </button>
        </fieldset>
      </form>
      {loading && (
        <div className='loading'>
          <img src={process.env.PUBLIC_URL + 'img/1488.gif'} alt='loading' />
          <span>Loading</span>
        </div>
      )}
    </div>
  );
}

export default Searchbar;
