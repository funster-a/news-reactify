import styles from './BannersList.module.css'
import withSkeleton from '../../helpers/hocs/withSkeleton'
import NewsBanner from '../NewsBanner/NewsBanner'

const BannersList = ({banners}) => {
  return (
    <ul className={styles.banners} >
        {banners?.map((banner) => {
          return (
            <NewsBanner 
              key={banner.id} 
              item={banner} 
            />
          )
        })}
    </ul>
  )
}

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 6, 'rowList')

export default BannersListWithSkeleton;
