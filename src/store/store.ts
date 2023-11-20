import { configureStore } from '@reduxjs/toolkit';
import mapSlice from '../hook/@redux/mapSlice';
import loadingSlice from 'hook/@redux/loadingSlice';
import moreSlice from 'hook/@redux/moreSlice';
import resultSlice from 'hook/@redux/resultSlice';
import searchSlice from 'hook/@redux/searchSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    map: mapSlice,
    loading: loadingSlice,
    more: moreSlice,
    result: resultSlice,
    search: searchSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
