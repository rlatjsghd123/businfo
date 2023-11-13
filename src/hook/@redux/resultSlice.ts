import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Location, TypeUserClick, TypestationArrive } from '../../type/type';

interface defaultType {
  userClick: TypeUserClick;
  stationArrive: TypestationArrive;
}
const initialState: defaultType = {
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
};

const resultSlice = createSlice({
  name: 'resultReducer',
  initialState,
  reducers: {
    UserClickedStation: (state, action: PayloadAction<TypeUserClick>) => {
      state.userClick = action.payload;
    },
    StationArriveInfo: (state, action: PayloadAction<TypestationArrive>) => {
      state.stationArrive = action.payload;
    },
  },
});

export const { UserClickedStation, StationArriveInfo } = resultSlice.actions;

export default resultSlice.reducer;
