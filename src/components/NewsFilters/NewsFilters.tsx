/* eslint-disable react/prop-types */
import styles from './header.module.css'
import { useFetch } from '../../helpers/Hooks/useFetch'
import { getCategories } from '../../api/apiNews'
import Categories from '../Categories/Categories'
import Search from '../Search/Search'
import Slider from '../Slider/Slider'
import { CategoriesApiResponse, IFilters } from '../../interfaces'
import { useTheme } from '../../context/ThemeContext'

interface Props {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({filters, changeFilter}: Props) => {
  const {data: dataCategories} = useFetch<CategoriesApiResponse, null>(getCategories)
  const {isDark} = useTheme()

  return (
    <div className={styles.filters} >
      {dataCategories ? (
        <Slider isDark={isDark} >
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => changeFilter('category', category)}
         />
        </Slider>
         ) : null}

        <Search
          keywords={filters.keywords}
          setKeywords={(keywords) => changeFilter('keywords', keywords)}
        />

    </div>
  )
}

export default NewsFilters
