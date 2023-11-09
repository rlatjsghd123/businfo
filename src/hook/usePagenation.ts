import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

function usePagenation() {
  const [currentItems, setCurrentItems] = useState<any>([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const busNumSelector = useSelector(
    (state: RootState) => state.busInfo.busNum
  );
  const stationSelector = useSelector(
    (state: RootState) => state.busInfo.station
  );
  const busNumLength = busNumSelector.ServiceResult.msgBody.itemList.length;
  const stationLength = stationSelector.ServiceResult.msgBody.itemList.length;
  const current = () => {
    const endOffset = itemOffset + itemsPerPage;
    if (Array.isArray(busNumSelector.ServiceResult.msgBody.itemList)) {
      setCurrentItems(
        busNumSelector.ServiceResult.msgBody.itemList.slice(
          itemOffset,
          endOffset
        )
      );
    }
    if (Array.isArray(stationSelector.ServiceResult.msgBody.itemList)) {
      setCurrentItems(
        stationSelector.ServiceResult.msgBody.itemList.slice(
          itemOffset,
          endOffset
        )
      );
    }
  };

  const handlePageChange = (e: { selected: number }) => {
    const newOffset =
      (e.selected * itemsPerPage) % busNumLength ? busNumLength : stationLength;

    setItemOffset(newOffset);
  };

  return {
    handlePageChange,
    currentItems,
    current,
  };
}

export default usePagenation;
