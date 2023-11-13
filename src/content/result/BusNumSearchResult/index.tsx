import ReactPaginate from 'react-paginate';
import '../../../style/pagination.scss';
import SearchedMore from '../../more/searchedMore';
import useSearchResult from '../../../hook/result/useSearchResult';
import BusSearchCount from '../../../component/result/busSearchCount';
import BusNoSearchResult from '../../../component/result/busNoSearchResult';
import BusSearchData from '../../../component/result/busSearchData';
import BusNoData from '../../../component/result/busNoData';
import usePagenation from '../../../hook/usePagenation';
import BusInfoData from '../../../component/result/busInfoData';
import { BusUl } from 'component/result/busNoData/style';

function BusSearchResult() {
  const {
    busStationLocation,
    busStationLocationFalse,
    busNumSelector,
    moreSelector,
    moreList,
  } = useSearchResult();
  const { current, currentItems, handlePageChange } = usePagenation();

  return (
    <>
      <BusSearchCount
        moreList={moreList}
        noResult={busNumSelector.ServiceResult.msgHeader.headerMsg._text}
        text="버스"
      />
      <BusUl>
        {busNumSelector.ServiceResult.msgHeader.headerMsg._text ===
        '결과가 없습니다.' ? (
          <BusNoSearchResult />
        ) : Array.isArray(moreList) ? (
          <BusSearchData
            busStationLocation={busStationLocation}
            currentItems={currentItems}
          />
        ) : (
          <BusInfoData
            moreList={moreList}
            busStationLocationFalse={busStationLocationFalse}
          />
        )}
      </BusUl>
      <ReactPaginate
        pageCount={Math.ceil(
          Array.isArray(busNumSelector.ServiceResult.msgBody.itemList)
            ? busNumSelector.ServiceResult.msgBody.itemList.length / 10
            : busNumSelector.ServiceResult.msgHeader.headerMsg._text ===
              '결과가 없습니다.'
            ? 0
            : 1
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
      : (
      <BusNoData text="버스 0건" />){moreSelector === false && <SearchedMore />}
    </>
  );
}

export default BusSearchResult;
