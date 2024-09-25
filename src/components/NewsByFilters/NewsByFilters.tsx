import { TOTAL_PAGES } from '../../constants/constant'
import { useDebounce } from '../../helpers/Hooks/useDebounce'
import { useAppDispatch, useAppSelector } from '../../store'
import { useGetNewsQuery } from '../../store/services/newsApi'
import { setFilters }  from '../../store/slices/newsSlice'
import NewsFilters from '../NewsFilters/NewsFilters'
import NewsList from '../NewsList/NewsList'
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper'
import styles from './NewsByFilters.module.css'

const NewsByFilters = () => {
  const dispatch = useAppDispatch()

  const filters = useAppSelector(state => state.news.filters)

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if(filters.page_number < TOTAL_PAGES) {
      dispatch(setFilters({
        key: 'page_number',
        value: filters.page_number + 1
      }))
    }
  }

  const handlePreviousPage = () => {
    if(filters.page_number > 1) {
      dispatch(setFilters({
        key: 'page_number',
        value: filters.page_number - 1
      }))
    }
  }

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({
      key: 'page_number',
      value: pageNumber
    }))
  }

  return (
    <section className={styles.section} >
        <NewsFilters filters={filters} />

        <PaginationWrapper
          top
          bottom
          totalPages={TOTAL_PAGES} 
          handleNextPage={handleNextPage}
          handlePageClick={handlePageClick}
          handlePreviousPage={handlePreviousPage}
          currentPage={filters.page_number}
        >
          <NewsList isLoading={isLoading} news={data?.news} />
        </PaginationWrapper>
    </section>
  )
}

export default NewsByFilters
