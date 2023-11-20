import * as S from './style';
import useMapAction from '../../hook/map/useMapAction';
import BusLocationInfo from '../../component/map/BusLocationInfo';
import { useEffect } from 'react';

function BusLocation() {
  const {
    busLocation,
    MapLevelSelector,
    busLocationSelector,
    StationMoreSelector,
    busStationSelector,
  } = useMapAction();

  // useEffect(() => {
  //   busLocation();
  // }, []);

  return (
    <S.LocationInfo>
      <S.InnerLocationInfo>
        <S.Map>
          <BusLocationInfo
            busLocationSelector={busLocationSelector}
            MapLevelSelector={MapLevelSelector}
            StationMoreSelector={StationMoreSelector}
            busStationSelector={busStationSelector}
          />
        </S.Map>
      </S.InnerLocationInfo>
    </S.LocationInfo>
  );
}

export default BusLocation;
