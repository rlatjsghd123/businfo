import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../scss/SearchResult.scss';
import { GoArrowBoth } from 'react-icons/go';
import ReactPaginate from 'react-paginate';
import SearchedMore from '../more/SearchedMore';
import type { RootState, AppDispatch } from '../../store/store';
import { TypeCurrentItem } from '../../type/type';
import { v4 as uuidv4 } from 'uuid';

function BusSearchResult() {
  const [currentItems, setCurrentItems] = useState<TypeCurrentItem[]>([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const dispatch = useDispatch<AppDispatch>();
  const busNumSelector = useSelector(
    (state: RootState) => state.busInfo.busNum
  );
  const moreSelector = useSelector((state: RootState) => state.busInfo.more);

  useEffect(() => {
    // 페이지네이션
    if (busNumSelector !== null) {
      const endOffset = itemOffset + itemsPerPage;
      if (Array.isArray(busNumSelector.ServiceResult.msgBody.itemList)) {
        setCurrentItems(
          busNumSelector.ServiceResult.msgBody.itemList.slice(
            itemOffset,
            endOffset
          )
        );
      }
    }
  }, [busNumSelector, itemOffset]);

  const handlePageChange = (e: { selected: number }) => {
    if (busNumSelector !== null) {
      const newOffset =
        (e.selected * itemsPerPage) %
        busNumSelector.ServiceResult.msgBody.itemList.length;

      setItemOffset(newOffset);
    }
  };

  const busStationLocation = useCallback(
    (list: TypeCurrentItem) => {
      dispatch({
        type: 'busInfoReducer/MoreOpen',
      });
      dispatch({
        type: 'busInfoReducer/MoreLocation',
        payload: list,
      });
      // 정류장클릭시 정보element 끄기
      dispatch({
        type: 'busInfoReducer/StationMoreClose',
      });
    },
    [dispatch]
  );

  return (
    <>
      {busNumSelector !== null ? (
        <>
          <h3>
            버스
            {Array.isArray(busNumSelector.ServiceResult.msgBody.itemList)
              ? busNumSelector.ServiceResult.msgBody.itemList.length
              : busNumSelector.ServiceResult.msgHeader.headerMsg._text ===
                '결과가 없습니다.'
              ? 0
              : 1}
            건
          </h3>
          <ul className='busNum_list'>
            {busNumSelector.ServiceResult.msgHeader.headerMsg._text ===
            '결과가 없습니다.' ? (
              <li className='no_result'>검색결과가 없습니다.</li>
            ) : (
              <>
                {Array.isArray(
                  busNumSelector.ServiceResult.msgBody.itemList
                ) ? (
                  currentItems.map((list: TypeCurrentItem) => (
                    <li key={uuidv4()}>
                      <div className='bus_info_box'>
                        <h4>
                          {list.routeType._text === '1' && (
                            <span className='bus_category red'>공항</span>
                          )}
                          {list.routeType._text === '2' && (
                            <span className='bus_category orange'>마을</span>
                          )}
                          {list.routeType._text === '3' && (
                            <span className='bus_category blue'>간선</span>
                          )}
                          {list.routeType._text === '4' && (
                            <span className='bus_category green'>지선</span>
                          )}
                          {list.routeType._text === '5' && (
                            <span className='bus_category yellow'>순환</span>
                          )}
                          {list.routeType._text === '6' && (
                            <span className='bus_category red'>광역</span>
                          )}
                          <span onClick={() => busStationLocation(list)}>
                            {list.busRouteNm._text}
                          </span>
                        </h4>
                        <p className='start_end_point'>
                          {list.stStationNm._text} <GoArrowBoth />
                          {list.edStationNm._text}
                        </p>
                        <p className='corp'>{list.corpNm._text}</p>
                        <ul className='bus_time'>
                          <li>배차 : {list.term._text}분</li>
                          <li>
                            첫차 : {list.firstBusTm._text.substr(8, 2)}:
                            {list.firstBusTm._text.substr(10, 2)}분
                          </li>
                          <li>
                            막차 : {list.lastBusTm._text.substr(8, 2)}:
                            {list.lastBusTm._text.substr(10, 2)}분
                          </li>
                        </ul>
                      </div>
                    </li>
                  ))
                ) : (
                  <li>
                    <div className='bus_info_box'>
                      <h4>
                        {busNumSelector.ServiceResult.msgBody.itemList.routeType
                          ._text === '1' && (
                          <span className='bus_category red'>공항</span>
                        )}
                        {busNumSelector.ServiceResult.msgBody.itemList.routeType
                          ._text === '2' && (
                          <span className='bus_category orange'>마을</span>
                        )}
                        {busNumSelector.ServiceResult.msgBody.itemList.routeType
                          ._text === '3' && (
                          <span className='bus_category blue'>간선</span>
                        )}
                        {busNumSelector.ServiceResult.msgBody.itemList.routeType
                          ._text === '4' && (
                          <span className='bus_category green'>지선</span>
                        )}
                        {busNumSelector.ServiceResult.msgBody.itemList.routeType
                          ._text === '5' && (
                          <span className='bus_category yellow'>순환</span>
                        )}
                        {busNumSelector.ServiceResult.msgBody.itemList.routeType
                          ._text === '6' && (
                          <span className='bus_category red'>광역</span>
                        )}
                        <span
                          onClick={() => {
                            dispatch({
                              type: 'busInfoReducer/MoreLocation',
                              payload:
                                busNumSelector.ServiceResult.msgBody.itemList,
                            });
                            dispatch({
                              type: 'busInfoReducer/MoreOpen',
                            });
                          }}
                        >
                          {
                            busNumSelector.ServiceResult.msgBody.itemList
                              .busRouteNm._text
                          }
                        </span>
                      </h4>
                      <p className='start_end_point'>
                        {
                          busNumSelector.ServiceResult.msgBody.itemList
                            .stStationNm._text
                        }{' '}
                        <GoArrowBoth />
                        {
                          busNumSelector.ServiceResult.msgBody.itemList
                            .edStationNm._text
                        }
                      </p>
                      <p className='corp'>
                        {
                          busNumSelector.ServiceResult.msgBody.itemList.corpNm
                            ._text
                        }
                      </p>
                      <ul className='bus_time'>
                        <li>
                          배차 :
                          {
                            busNumSelector.ServiceResult.msgBody.itemList.term
                              ._text
                          }
                          분
                        </li>
                        <li>
                          첫차 :
                          {busNumSelector.ServiceResult.msgBody.itemList.firstBusTm._text?.substring(
                            8,
                            2
                          )}
                          :
                          {busNumSelector.ServiceResult.msgBody.itemList.firstBusTm._text.substring(
                            10,
                            2
                          )}
                          분
                        </li>
                        <li>
                          막차 :
                          {busNumSelector.ServiceResult.msgBody.itemList.lastBusTm._text.substring(
                            8,
                            2
                          )}
                          :
                          {busNumSelector.ServiceResult.msgBody.itemList.lastBusTm._text.substring(
                            10,
                            2
                          )}
                          분
                        </li>
                      </ul>
                    </div>
                  </li>
                )}
              </>
            )}
          </ul>
          <ReactPaginate
            pageCount={Math.ceil(
              Array.isArray(busNumSelector.ServiceResult.msgBody.itemList)
                ? busNumSelector.ServiceResult.msgBody.itemList.length / 10
                : busNumSelector.ServiceResult.msgHeader.headerMsg._text ===
                  '결과가 없습니다.'
                ? 0
                : 1
            )}
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
          <h3>버스 0건</h3>
          <ul className='busNum_list'>
            <li></li>
          </ul>
        </>
      )}
      {moreSelector === false && <SearchedMore />}
    </>
  );
}

export default BusSearchResult;
