import React from 'react';
import '../scss/LocationMore.scss';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';
function LocationMore() {
  const dispatch = useDispatch<AppDispatch>();
  // 현재정류장에 오는 버스,도착정보
  const arriveSelector = useSelector(
    (state: RootState) => state.busInfo.stationArrive
  );
  console.log(arriveSelector);
  const UserClickedStationSelector = useSelector(
    (state: RootState) => state.busInfo.userClick
  );
  return (
    <div className='station_location'>
      <div className='inner_station_location'>
        {arriveSelector !== null && (
          <>
            <div className='station_title'>
              <h1>
                {UserClickedStationSelector !== null &&
                UserClickedStationSelector.stationNm
                  ? UserClickedStationSelector.stationNm._text
                  : UserClickedStationSelector !== null &&
                    UserClickedStationSelector.stNm._text}
              </h1>
              <span
                onClick={() =>
                  // 정류장클릭시 정보element 끄기
                  dispatch({
                    type: 'busInfoReducer/StationMoreClose',
                  })
                }
              >
                x
              </span>
            </div>

            <div className='station_location_info'>
              <table className='arrive_info'>
                <caption className='blind'>버스위치정보</caption>
                <thead>
                  <tr>
                    <th>곧도착</th>
                    <th colSpan={4}>곧도착하는버스</th>
                  </tr>
                </thead>
                <tbody>
                  {arriveSelector !== null &&
                  Array.isArray(
                    arriveSelector.ServiceResult.msgBody.itemList
                  ) ? (
                    arriveSelector.ServiceResult.msgBody.itemList.map(
                      (list) => (
                        <tr key={list.staOrd._text}>
                          <td>
                            <strong>{list.busRouteAbrv._text}</strong>
                          </td>
                          <td>
                            {list.busType1._text === '0' && '[일반]'}
                            {list.busType1._text === '1' && '[저상]'}
                            {list.busType1._text === '2' && '[굴절]'}
                          </td>
                          <td>{list.arrmsg1._text}</td>
                          <td>
                            {list.busType2._text === '0' && '[일반]'}
                            {list.busType2._text === '1' && '[저상]'}
                            {list.busType2._text === '2' && '[굴절]'}
                          </td>
                          <td>{list.arrmsg2._text}</td>
                        </tr>
                      )
                    )
                  ) : (
                    <tr>
                      <td>
                        <strong>
                          {
                            arriveSelector.ServiceResult.msgBody.itemList
                              .busRouteAbrv._text
                          }
                        </strong>
                      </td>
                      <td>
                        {arriveSelector.ServiceResult.msgBody.itemList.busType1
                          ._text === '0' && '[일반]'}
                        {arriveSelector.ServiceResult.msgBody.itemList.busType1
                          ._text === '1' && '[저상]'}
                        {arriveSelector.ServiceResult.msgBody.itemList.busType1
                          ._text === '2' && '[굴절]'}
                      </td>
                      <td>
                        {
                          arriveSelector.ServiceResult.msgBody.itemList.arrmsg1
                            ._text
                        }
                      </td>
                      <td>
                        {arriveSelector.ServiceResult.msgBody.itemList.busType2
                          ._text === '0' && '[일반]'}
                        {arriveSelector.ServiceResult.msgBody.itemList.busType2
                          ._text === '1' && '[저상]'}
                        {arriveSelector.ServiceResult.msgBody.itemList.busType2
                          ._text === '2' && '[굴절]'}
                      </td>
                      <td>
                        {' '}
                        {
                          arriveSelector.ServiceResult.msgBody.itemList.arrmsg2
                            ._text
                        }
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LocationMore;
