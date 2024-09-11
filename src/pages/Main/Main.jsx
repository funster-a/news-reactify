import styles from './main.module.css'
import { getNews } from '../../api/apiNews'
import { useDebounce } from '../../helpers/Hooks/useDebounce'
import { PAGE_SIZE } from '../../constants/constant'
import { useFetch } from '../../helpers/Hooks/useFetch'
import { useFilters } from '../../helpers/Hooks/useFilters'
import LatestNews from '../../components/LatestNews/LatestNews'
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters'


const Main = () => {
  const {filters, changeFilter} = useFilters({
    page_number: 1, 
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
});

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const {data, isLoading} = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <main className={styles.main} >

      <LatestNews 
      isLoading={isLoading}
      banners={data && data.news}
      />

      <NewsByFilters
        news={data?.news}
        isLoading={isLoading}
        filters={filters}
        changeFilter={changeFilter}
      />

    </main>
  )
}

export default Main
