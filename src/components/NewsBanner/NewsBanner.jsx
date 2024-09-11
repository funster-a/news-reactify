import styles from './NewsBanner.module.css'
import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import Image from '../Image/Image'
import img from '../../assets/no-img.jpg'

const NewsBanner = ({item}) => {
  return (
    <div className={styles.banner} >
        <Image image={item.image === 'None' ? img : item.image} />
        <h3 className={styles.title} >{item.title}</h3>
        <p className={styles.extra} >
          {formatTimeAgo(item.published)} by {item.author}
        </p>
    </div>
  )
}

export default NewsBanner;
