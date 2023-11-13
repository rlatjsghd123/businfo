import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Location, TypeClickValue } from '../../type/type';

interface defaultType {
  ClickValue: TypeClickValue;
  more: boolean;
  stationMore: boolean;
}
const initialState: defaultType = {
  more: true,
  stationMore: true,
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
};

const moreSlice = createSlice({
  name: 'moreReducer',
  initialState,
  reducers: {
    StationMoreOpen: state => {
      state.stationMore = false;
    },
    StationMoreClose: state => {
      state.stationMore = true;
    },
    MoreLocation: (state, action: PayloadAction<TypeClickValue>) => {
      state.ClickValue = action.payload;
    },
    MoreClose: state => {
      state.more = true;
    },
    MoreOpen: state => {
      state.more = false;
    },
  },
});

export const {
  MoreOpen,
  MoreClose,
  MoreLocation,
  StationMoreClose,
  StationMoreOpen,
} = moreSlice.actions;

export default moreSlice.reducer;
