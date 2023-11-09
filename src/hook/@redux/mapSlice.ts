import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../../type/type';

interface defaultType {
  location: Location;
  level: number;
}
const initialState: defaultType = {
  location: { lat: 37.566535, lng: 126.9779692 },
  level: 7,
};

const mapSlice = createSlice({
  name: 'LocationMapReducer',
  initialState,
  reducers: {
    MapLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
    },
    BusLocation: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
  },
});

export const { MapLevel, BusLocation } = mapSlice.actions;

export default mapSlice.reducer;
