/* eslint-disable react/prop-types */
import styles from './header.module.css'
import { useFetch } from '../../helpers/Hooks/useFetch'
import { getCategories } from '../../api/apiNews'
import Categories from '../Categories/Categories'
import Search from '../Search/Search'

const NewsFilters = ({filters, changeFilter}) => {
  const {data: dataCategories} = useFetch(getCategories)

  return (
    <div className={styles.filters} >
      {dataCategories ? (
          <Categories
            categories={dataCategories.categories}
            setSelectedCategory={(category) => changeFilter('category', category)}
            selectedCategory={filters.category}
         />
         ) : null}

        <Search
          keywords={filters.keywords}
          setKeywords={(keywords) => changeFilter('keywords', keywords)}
        />

    </div>
  )
}

export default NewsFilters
