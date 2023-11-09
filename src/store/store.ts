import { configureStore, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  TypeUserClick,
  TypeBusNum,
  TypeStation,
  TypebusStation,
  TypeClickValue,
  TpyestationArrive,
} from '../type/type';
import mapSlice from '../hook/@redux/mapSlice';

interface defaultType {
  station: TypeStation;
  busNum: TypeBusNum;
  userClick: TypeUserClick;
  busStation: TypebusStation;
  StationLocation: undefined;
  ClickValue: TypeClickValue;
  more: boolean;
  Marker: boolean;
  stationMore: boolean;
  stationArrive: TpyestationArrive;
  loading: boolean;
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
        itemList: {
          length: 0,
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
        itemList: {
          length: 0,
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
      },
    },
  },
  busStation: {},
  StationLocation: undefined,
  ClickValue: {
    routeType: {
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
    busRouteId: {
      _text: '',
    },
  },
  more: true,
  Marker: true,
  stationMore: true,
  stationArrive: {
    ServiceResult: {
      msgHeader: {
        headerMsg: {
          _text: '',
        },
      },
      msgBody: {
        itemList: {
          busType1: {
            _text: '',
          },
          busType2: {
            _text: '',
          },
          arrmsg1: {
            _text: '',
          },
          arrmsg2: {
            _text: '',
          },
          busRouteAbrv: {
            _text: '',
          },
        },
      },
    },
  },
  userClick: {
    stNm: {
      _text: '',
    },
    stationNm: {
      _text: '',
    },
  },
  loading: false,
};

const busInfo = createSlice({
  name: 'busInfoReducer',
  initialState,
  reducers: {
    IsLoading: (state) => {
      state.loading = false;
    },
    UnIsLoading: (state) => {
      state.loading = true;
    },
    UserClickedStation: (state, action: PayloadAction<TypeUserClick>) => {
      state.userClick = action.payload;
    },
    StationArriveInfo: (state, action: PayloadAction<TpyestationArrive>) => {
      state.stationArrive = action.payload;
    },
    StationMoreOpen: (state) => {
      state.stationMore = false;
    },
    StationMoreClose: (state) => {
      state.stationMore = true;
    },
    OnMarKer: (state) => {
      state.Marker = false;
    },
    OffMarKer: (state) => {
      state.Marker = true;
    },
    MoreClose: (state) => {
      state.more = true;
    },
    MoreOpen: (state) => {
      state.more = false;
    },
    StationSearched: (state, action: PayloadAction<TypeStation>) => {
      state.station = action.payload;
    },
    BusNumSearched: (state, action: PayloadAction<TypeBusNum>) => {
      state.busNum = action.payload;
    },
    BusStationInfo: (state, action: PayloadAction<TypebusStation>) => {
      state.busStation = action.payload;
    },
    BusStationLocation: (state, action: PayloadAction<undefined>) => {
      state.StationLocation = action.payload;
    },
    MoreLocation: (state, action: PayloadAction<TypeClickValue>) => {
      state.ClickValue = action.payload;
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    busInfo: busInfo.reducer,
    map: mapSlice,
  },
});
export const {
  UnIsLoading,
  IsLoading,
  UserClickedStation,
  StationArriveInfo,
  StationMoreOpen,
  StationMoreClose,
  OnMarKer,
  OffMarKer,
  MoreClose,
  MoreOpen,
  MoreLocation,
  StationSearched,
  BusNumSearched,
  BusStationInfo,
  BusStationLocation,
} = busInfo.actions;

export default store;
