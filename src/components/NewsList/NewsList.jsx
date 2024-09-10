import styles from './NewsList.module.css'
import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import Image from '../Image/Image'
import NewsItem from '../NewsItem/NewsItem'
import withSkeleton from '../../helpers/hocs/withSkeleton'


const NewsList = ({news}) => {
  return (
    <div className={styles.banner} >
        {news.map(item => {
          return <NewsItem key={item.id} item={item} />
        })}
    </div>
  )
}

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10)


export default NewsListWithSkeleton
