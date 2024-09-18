import { getNews } from '../../api/apiNews'
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constant'
import { useDebounce } from '../../helpers/Hooks/useDebounce'
import { useFetch } from '../../helpers/Hooks/useFetch'
import { useFilters } from '../../helpers/Hooks/useFilters'
import { NewsApiResponse, ParamsType } from '../../interfaces'
import NewsFilters from '../NewsFilters/NewsFilters'
import NewsList from '../NewsList/NewsList'
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper'
import styles from './NewsByFilters.module.css'

const NewsByFilters = () => {
  const {filters, changeFilter} = useFilters({
    page_number: 1, 
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
});

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const {data, isLoading} = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if(filters.page_number < TOTAL_PAGES) {
      changeFilter('page_number', filters.page_number + 1);
    }
  }

  const handlePreviousPage = () => {
    if(filters.page_number > 1) {
      changeFilter('page_number', filters.page_number - 1);
    }
  }

  const handlePageClick = (pageNumber: number) => {
    changeFilter('page_number', pageNumber)
  }

  return (
    <section className={styles.section} >
        <NewsFilters 
          filters={filters}
          changeFilter={changeFilter}
        />

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
