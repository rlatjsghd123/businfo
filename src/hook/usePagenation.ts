import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

function usePagenation() {
  const [currentItems, setCurrentItems] = useState<any>([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const busNumSelector = useSelector((state: RootState) => state.search.busNum);
  const stationSelector = useSelector(
    (state: RootState) => state.search.station,
  );
  const busNumLength = busNumSelector?.ServiceResult?.msgBody?.itemList?.length;
  const stationLength =
    stationSelector?.ServiceResult?.msgBody?.itemList?.length;
  // const endOffset = itemOffset + itemsPerPage;

  // if (Array.isArray(busNumSelector)) {
  //   setCurrentItems(
  //     busNumSelector?.ServiceResult?.msgBody?.itemList.slice(
  //       itemOffset,
  //       endOffset,
  //     ),
  //   );
  // }
  // if (Array.isArray(stationSelector)) {
  //   setCurrentItems(
  //     stationSelector?.ServiceResult?.msgBody?.itemList.slice(
  //       itemOffset,
  //       endOffset,
  //     ),
  //   );
  // }

  const endOffset = itemOffset + itemsPerPage;
  const handlePageChange = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerPage) % stationLength;

    setItemOffset(newOffset);
  };

  return {
    handlePageChange,
    currentItems,
    setCurrentItems,
    itemOffset,
    itemsPerPage,
    endOffset,
  };
}

export default usePagenation;
