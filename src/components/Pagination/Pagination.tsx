import { useTheme } from '../../context/ThemeContext'
import { IPaginationProps } from '../../interfaces'
import styles from './Pagination.module.css'

const Pagination = ({
  totalPages, 
  handleNextPage,
  handlePageClick, 
  handlePreviousPage, 
  currentPage
}: IPaginationProps) => {
  const { isDark } = useTheme()
  return (
    <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`} >
      <button 
        disabled={currentPage <= 1}
        onClick={handlePreviousPage} 
        className={styles.arrow} 
      >{'<'}</button>
      <div>
        {[...Array(totalPages)].map((_, index) => {
          return <button 
            onClick={() => handlePageClick(index + 1)} 
            className={styles.pageNumber} 
            disabled={currentPage === index+1}
            key={index} 
          >{index + 1}</button>
        })}
      </div>

      <button 
        disabled={currentPage >= totalPages}
        onClick={handleNextPage} 
        className={styles.arrow} 
      >{'>'}</button>
    </div>
  )
}

export default Pagination
