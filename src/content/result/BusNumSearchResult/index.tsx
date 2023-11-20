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
import { useEffect } from 'react';

function BusSearchResult() {
  const {
    busStationLocation,
    busStationLocationFalse,
    busNumSelector,
    moreSelector,
  } = useSearchResult();

  const BusMoreList = busNumSelector?.ServiceResult?.msgBody?.itemList;
  const busHeaderMsg =
    busNumSelector?.ServiceResult?.msgHeader?.headerMsg?._text;

  const {
    handlePageChange,
    currentItems,
    setCurrentItems,
    itemOffset,
    endOffset,
  } = usePagenation();

  useEffect(() => {
    if (BusMoreList?.length > 1) {
      setCurrentItems(
        busNumSelector?.ServiceResult?.msgBody?.itemList.slice(
          itemOffset,
          endOffset,
        ),
      );
    }
  }, [endOffset, busNumSelector]);

  return (
    <>
      {BusMoreList?.length !== 1 ? (
        <>
          <BusSearchCount
            moreList={BusMoreList}
            noResult={busHeaderMsg}
            text="버스"
          />
          <BusUl>
            {busHeaderMsg === '결과가 없습니다.' ? (
              <BusNoSearchResult />
            ) : Array.isArray(BusMoreList) ? (
              <BusSearchData
                busStationLocation={busStationLocation}
                currentItems={currentItems}
              />
            ) : (
              <BusInfoData
                moreList={BusMoreList}
                busStationLocationFalse={busStationLocationFalse}
              />
            )}
          </BusUl>
          <ReactPaginate
            pageCount={Math.ceil(
              Array.isArray(BusMoreList)
                ? BusMoreList.length / 10
                : busHeaderMsg === '결과가 없습니다.'
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
          {moreSelector === false && <SearchedMore />}
        </>
      ) : (
        <>
          <BusNoData text="버스 0건" />
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

export default BusSearchResult;
