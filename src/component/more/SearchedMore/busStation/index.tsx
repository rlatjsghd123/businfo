import React from 'react';
import { TypeLocationList, TypebusStation } from 'type/type';
import { v4 as uuidv4 } from 'uuid';
import * as S from './style';

interface BusStationProps {
  busStationSelector: TypebusStation;
  handleLocationClick: (list: TypeLocationList) => void;
  selected?: TypeLocationList;
  station: string;
}
function BusStation({
  busStationSelector,
  handleLocationClick,
  selected,
  station,
}: BusStationProps) {
  return (
    <S.BusStationUl>
      {busStationSelector?.ServiceResult?.msgBody?.itemList
        ?.filter(
          (list, index: number) =>
            busStationSelector?.ServiceResult?.msgBody?.itemList?.indexOf(
              list
            ) === index
        )
        .map(list => (
          <S.BusStationLi
            onClick={() => handleLocationClick(list)}
            key={uuidv4()}
            selected={selected === list}
            station={station === list.direction._text}
            className={`${selected === list ? 'selected' : ''} ${
              station === list.direction._text ? 'change_list' : 'station_list'
            }`}
          >
            {list.stationNm._text}({list.arsId._text})
          </S.BusStationLi>
        ))}
    </S.BusStationUl>
  );
}

export default React.memo(BusStation);
