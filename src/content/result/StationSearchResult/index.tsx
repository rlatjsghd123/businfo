import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import BusNoData from '../../../component/result/busNoData';
import BusSearchCount from '../../../component/result/busSearchCount';
import BusNoSearchResult from 'component/result/busNoSearchResult';
import StationSearchData from 'component/result/stationSearchData';
import usePagenation from 'hook/usePagenation';
import BusStationInfoData from 'component/result/busStationInfoData';
import useSearchStationResult from 'hook/result/useSearchStationResult';
import { BusUl } from 'component/result/busNoData/style';
import { useEffect } from 'react';

function StationSearchResult() {
  const stationSelector = useSelector(
    (state: RootState) => state.search.station,
  );
  const stationMoreList = stationSelector?.ServiceResult?.msgBody?.itemList;
  const stationHeadMsg =
    stationSelector?.ServiceResult?.msgHeader?.headerMsg?._text;

  const {
    handlePageChange,
    currentItems,
    setCurrentItems,
    itemOffset,
    endOffset,
  } = usePagenation();

  const { stationInfo } = useSearchStationResult();

  useEffect(() => {
    if (stationMoreList?.length > 1) {
      setCurrentItems(
        stationSelector?.ServiceResult?.msgBody?.itemList.slice(
          itemOffset,
          endOffset,
        ),
      );
    }
  }, [endOffset, stationSelector]);

  return (
    <>
      {stationMoreList?.length !== 1 ? (
        <>
          <BusSearchCount
            text="정류장"
            moreList={stationMoreList}
            noResult={stationHeadMsg}
          />
          <BusUl>
            {stationHeadMsg === '결과가 없습니다.' ? (
              <BusNoSearchResult />
            ) : Array.isArray(stationMoreList) ? (
              <StationSearchData
                currentItems={currentItems}
                stationInfo={stationInfo}
              />
            ) : (
              <BusStationInfoData
                stationInfo={stationInfo}
                stationMoreList={stationMoreList}
              />
            )}
          </BusUl>
          <ReactPaginate
            pageCount={Math.ceil(
              Array.isArray(stationMoreList)
                ? stationMoreList.length / 10
                : stationHeadMsg === '결과가 없습니다.'
                  ? 0
                  : 1,
            )}
            pageRangeDisplayed={5}
            marginPagesDisplayed={-1}
            breakLabel={''}
            previousLabel={'<'}
            nextLabel={'>'}
            onPageChange={handlePageChange}
            containerClassName={'pagination-ul'}
            activeClassName={'currentPage'}
            renderOnZeroPageCount={null}
          />
        </>
      ) : (
        <>
          <BusNoData text="정류장 0건" />
          <ReactPaginate
            pageCount={1}
            breakLabel={''}
            previousLabel={'<'}
            nextLabel={'>'}
            containerClassName={'pagination-ul'}
            activeClassName={'currentPage'}
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </>
  );
}

export default StationSearchResult;
