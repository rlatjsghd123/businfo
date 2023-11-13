import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Location } from '../../type/type';

interface defaultType {
  loading: boolean;
}
const initialState: defaultType = {
  loading: true,
};

const LoadingSlice = createSlice({
  name: 'loadingReducer',
  initialState,
  reducers: {
    IsLoading: state => {
      state.loading = false;
    },
    UnIsLoading: state => {
      state.loading = true;
    },
  },
});

export const { UnIsLoading, IsLoading } = LoadingSlice.actions;

export default LoadingSlice.reducer;
