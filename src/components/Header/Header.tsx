import styles from './header.module.css'
import { formatDate } from '../../helpers/formatDate'

const Header = () => {
  return (
    <header className={styles.header} >
        <h1>NEWS REACTIFY</h1>
        <p>{formatDate(new Date())}</p>
    </header>
  )
}

export default Header
