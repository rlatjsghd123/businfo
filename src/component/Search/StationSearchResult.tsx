import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { xml2json } from 'xml-js';
import type { RootState, AppDispatch } from '../../store/store';
import { TypeStaitionList } from '../../type/type';

function StationSearchResult() {
  const [currentItems, setCurrentItems] = useState<TypeStaitionList[]>([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const itemsPerPage = 12;
  const stationSelector = useSelector(
    (state: RootState) => state.busInfo.station
  );
  useEffect(() => {
    if (stationSelector != null) {
      const endOffset = itemOffset + itemsPerPage;
      if (Array.isArray(stationSelector.ServiceResult.msgBody.itemList)) {
        setCurrentItems(
          stationSelector.ServiceResult.msgBody.itemList.slice(
            itemOffset,
            endOffset
          )
        );
      }
    }
  }, [stationSelector, itemOffset, itemsPerPage]);

  const handlePageChange = (e: { selected: number }) => {
    if (stationSelector !== null) {
      const newOffset =
        (e.selected * itemsPerPage) %
        stationSelector.ServiceResult.msgBody.itemList.length;
      setItemOffset(newOffset);
    }
  };
  // 정류장 클릭 시 해당 정류장으로 이동 및 버스도착정보
  const stationInfo = (list: TypeStaitionList) => {
    // 버스정류장위치
    dispatch({
      type: 'busInfoReducer/BusLocation',
      payload: {
        lat: list.tmY._text,
        lng: list.tmX._text,
      },
    });
    // map의 크기 확대
    dispatch({
      type: 'busInfoReducer/MapLevel',
      payload: 3,
    });
    // 정류장클릭시 정보element가 보이기
    dispatch({
      type: 'busInfoReducer/StationMoreOpen',
    });
    // list값
    dispatch({
      type: 'busInfoReducer/UserClickedStation',
      payload: list,
    });
    busStationArriveInfo(list);
  };
  const busStationArriveInfo = async (list: TypeStaitionList) => {
    setLoading(true);

    const stationArriveRes = await axios.get(
      `http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid?ServiceKey=${process.env.REACT_APP_SEOUL_BUS_API_KEY}&arsId=${list.arsId._text}`
    );
    try {
      const options = {
        compact: true,
        ignoreComment: true,
        spaces: 4,
      };
      const jsonData = xml2json(stationArriveRes.data, options);
      const json = JSON.parse(jsonData);

      dispatch({
        type: 'busInfoReducer/StationArriveInfo',
        payload: json,
      });
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };
  return (
    <>
      {stationSelector != null ? (
        <>
          <h3>
            정류장
            {Array.isArray(stationSelector.ServiceResult.msgBody.itemList)
              ? stationSelector.ServiceResult.msgBody.itemList.length
              : stationSelector.ServiceResult.msgHeader.headerMsg._text ===
                '결과가 없습니다.'
              ? 0
              : 1}
            건
          </h3>
          <ul className='bus_station_list'>
            {stationSelector.ServiceResult.msgHeader.headerMsg._text ===
            '결과가 없습니다.' ? (
              <li>검색결과가 없습니다.</li>
            ) : Array.isArray(
                stationSelector.ServiceResult.msgBody.itemList
              ) ? (
              currentItems.map((list) => (
                <li
                  onClick={() => stationInfo(list)}
                  key={list.stId._text}
                  className='station_list'
                >
                  {list.stNm._text}({list.arsId._text})
                </li>
              ))
            ) : (
              <li
                onClick={() =>
                  stationInfo(stationSelector.ServiceResult.msgBody.itemList)
                }
              >
                {stationSelector.ServiceResult.msgBody.itemList.stNm._text}(
                {stationSelector.ServiceResult.msgBody.itemList.arsId._text})
              </li>
            )}
          </ul>
          <ReactPaginate
            pageCount={
              Math.ceil(
                Array.isArray(stationSelector.ServiceResult.msgBody.itemList)
                  ? stationSelector.ServiceResult.msgBody.itemList.length
                  : stationSelector.ServiceResult.msgHeader.headerMsg._text ===
                    '결과가 없습니다.'
                  ? 0
                  : 1
              ) / 10
            }
            pageRangeDisplayed={5}
            marginPagesDisplayed={-1}
            breakLabel={''}
            previousLabel={'<'}
            nextLabel={'>'}
            onPageChange={handlePageChange}
            containerClassName={'pagination-ul'}
            activeClassName={'currentPage'}
            renderOnZeroPageCount={null}
          />
        </>
      ) : (
        <>
          <h3>정류장 0건</h3>
          <ul className='bus_station_list'>
            <li></li>
          </ul>
        </>
      )}
      {loading && (
        <div className='loading'>
          <img src={process.env.PUBLIC_URL + 'img/1488.gif'} alt='loading' />
          <span>Loading</span>
        </div>
      )}
    </>
  );
}

export default StationSearchResult;
