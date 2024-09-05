import styles from './NewsList.module.css'
import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import Image from '../Image/Image'
import NewsItem from '../NewsItem/NewsItem'


const NewsList = ({news}) => {
  return (
    <div className={styles.banner} >
        {news.map(item => {
          return <NewsItem key={item.id} item={item} />
        })}
    </div>
  )
}

export default NewsList
