import styles from './NewsList.module.css'
import NewsItem from '../NewsItem/NewsItem'
import withSkeleton from '../../helpers/hocs/withSkeleton'
import { INews } from '../../interfaces'

interface Props {
  news?: INews[];
}

const NewsList = ({news}: Props) => {
  return (
    <div className={styles.banner} >
        {news?.map(item => {
          return <NewsItem key={item.id} item={item} />
        })}
    </div>
  )
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10)


export default NewsListWithSkeleton
