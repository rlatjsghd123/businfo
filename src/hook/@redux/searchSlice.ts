import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  Location,
  TypeBusNum,
  TypeStation,
  TypebusStation,
} from '../../type/type';

interface defaultType {
  station: TypeStation;
  busNum: TypeBusNum;
  busStation: TypebusStation;
}
const initialState: defaultType = {
  station: {
    ServiceResult: {
      msgHeader: {
        headerMsg: {
          _text: '',
        },
      },
      msgBody: {
        itemList: [
          {
            tmY: {
              _text: '',
            },
            stId: {
              _text: '',
            },
            tmX: {
              _text: '',
            },
            stNm: {
              _text: '',
            },
            arsId: {
              _text: '',
            },
            posX: {
              _text: '',
            },
            posY: {
              _text: '',
            },
          },
        ],
      },
    },
  },
  busNum: {
    ServiceResult: {
      msgHeader: {
        headerMsg: {
          _text: '',
        },
      },
      msgBody: {
        itemList: [
          {
            routeType: {
              _text: '',
            },
            busRouteId: {
              _text: '',
            },
            busRouteNm: {
              _text: '',
            },
            stStationNm: {
              _text: '',
            },
            edStationNm: {
              _text: '',
            },
            corpNm: {
              _text: '',
            },
            term: {
              _text: '',
            },
            firstBusTm: {
              _text: '',
            },
            lastBusTm: {
              _text: '',
            },
          },
        ],
      },
    },
  },
  busStation: {
    ServiceResult: {
      msgHeader: {
        headerMsg: {
          _text: '',
        },
      },
      msgBody: {
        itemList: [
          {
            gpsX: {
              _text: '',
            },
            gpsY: {
              _text: '',
            },
            station: {
              _text: '',
            },
            stationNm: {
              _text: '',
            },
            arsId: {
              _text: '',
            },
            direction: {
              _text: '',
            },
          },
        ],
      },
    },
  },
};

const searchSlice = createSlice({
  name: 'searchReducer',
  initialState,
  reducers: {
    StationSearched: (state, action: PayloadAction<TypeStation>) => {
      state.station = action.payload;
    },
    BusNumSearched: (state, action: PayloadAction<TypeBusNum>) => {
      state.busNum = action.payload;
    },
    BusStationInfo: (state, action: PayloadAction<TypebusStation>) => {
      state.busStation = action.payload;
    },
  },
});

export const { StationSearched, BusNumSearched, BusStationInfo } =
  searchSlice.actions;

export default searchSlice.reducer;
