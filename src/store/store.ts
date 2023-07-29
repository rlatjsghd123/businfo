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

interface defaultType {
  station: TypeStation | null;
  busNum: TypeBusNum | null;
  userClick: TypeUserClick | null;
  busStation: TypebusStation | null;
  StationLocation: null;
  ClickValue: TypeClickValue | null;
  more: boolean;
  Marker: boolean;
  location: { lat: number; lng: number };
  level: number;
  stationMore: boolean;
  stationArrive: TpyestationArrive | null;
  loading: boolean;
}
const initialState: defaultType = {
  station: null,
  busNum: null,
  busStation: null,
  StationLocation: null,
  ClickValue: null,
  more: true,
  Marker: true,
  location: { lat: 37.566535, lng: 126.9779692 },
  level: 7,
  stationMore: true,
  stationArrive: null,
  userClick: null,
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
    MapLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
    },
    BusLocation: (
      state,
      action: PayloadAction<{ lat: number; lng: number }>
    ) => {
      state.location = action.payload;
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
    BusStationLocation: (state, action: PayloadAction<null>) => {
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
  },
});
export const {
  UnIsLoading,
  IsLoading,
  UserClickedStation,
  StationArriveInfo,
  StationMoreOpen,
  StationMoreClose,
  MapLevel,
  BusLocation,
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
