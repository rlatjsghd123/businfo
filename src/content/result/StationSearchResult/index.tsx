import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import Loding from '../../../component/Loading';
import BusNoData from '../../../component/result/busNoData';
import BusSearchCount from '../../../component/result/busSearchCount';
import BusNoSearchResult from 'component/result/busNoSearchResult';
import StationSearchData from 'component/result/stationSearchData';
import usePagenation from 'hook/usePagenation';
import BusStationInfoData from 'component/result/busStationInfoData';
import useSearchStationResult from 'hook/result/useSearchStationResult';
import { BusUl } from 'component/result/busNoData/style';

function StationSearchResult() {
  const stationSelector = useSelector(
    (state: RootState) => state.search.station,
  );

  const loading = useSelector((state: RootState) => state.loading.loading);

  const stationMoreList = stationSelector.ServiceResult.msgBody.itemList;
  const stationNoResult =
    stationSelector.ServiceResult.msgHeader.headerMsg._text;

  const { handlePageChange, currentItems, current } = usePagenation();
  const { stationInfo } = useSearchStationResult();

  return (
    <>
      <BusSearchCount
        text="정류장"
        moreList={stationMoreList}
        noResult={stationNoResult}
      />
      <BusUl>
        {stationNoResult === '결과가 없습니다.' ? (
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
            : stationNoResult === '결과가 없습니다.'
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
      :
      <BusNoData text="정류장 0건" />
      {loading && <Loding />}
    </>
  );
}

export default StationSearchResult;
