import { getLatestNews } from '../../api/apiNews';
import { useFetch } from '../../helpers/Hooks/useFetch';
import BannersList from '../BannersList/BannersList';
import styles from './LatestNews.module.css'

const LatestNews = () => {
  const {data, isLoading} = useFetch(getLatestNews);

  return (
    <section className={styles.section} >
      <BannersList 
        banners={data && data.news}
        isLoading={isLoading}
      />
    </section>
  )
}

export default LatestNews;
