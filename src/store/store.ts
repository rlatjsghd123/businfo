import { configureStore, createSlice } from '@reduxjs/toolkit';

const busInfo = createSlice({
  name: 'busInfoReducer',
  initialState: {
    station: null,
    busNum: null,
    busStation: null,
    StationLocation: {},
    ClickValue: null,
    more: true,
    Marker: true,
    location: { lat: 37.566535, lng: 126.9779692 },
    level: 7,
    stationMore: true,
    stationArrive: null,
    userClick: null,
    loading: false,
  },
  reducers: {
    IsLoading: (state: any) => {
      state.loading = false;
    },
    UnIsLoading: (state: any) => {
      state.loading = true;
    },
    UserClickedStation: (state: any, action) => {
      state.userClick = action.payload;
    },
    StationArriveInfo: (state: any, action) => {
      state.stationArrive = action.payload;
    },
    StationMoreOpen: (state: any) => {
      state.stationMore = false;
    },
    StationMoreClose: (state: any) => {
      state.stationMore = true;
    },
    MapLevel: (state: any, action) => {
      state.level = action.payload;
    },
    BusLocation: (state: any, action) => {
      state.location = action.payload;
    },
    OnMarKer: (state: any) => {
      state.Marker = false;
    },
    OffMarKer: (state: any) => {
      state.Marker = true;
    },
    MoreClose: (state: any) => {
      state.more = true;
    },
    MoreOpen: (state: any) => {
      state.more = false;
    },
    StationSearched: (state: any, action) => {
      state.station = action.payload;
    },
    BusNumSearched: (state: any, action) => {
      state.busNum = action.payload;
    },
    BusStationInfo: (state: any, action) => {
      state.busStation = action.payload;
    },
    BusStationLocation: (state: any, action) => {
      state.StationLocation = action.payload;
    },
    MoreLocation: (state: any, action) => {
      state.ClickValue = action.payload;
    },
  },
});

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
