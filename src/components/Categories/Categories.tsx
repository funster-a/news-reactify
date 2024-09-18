import { CategoriesType } from '../../interfaces';
import styles from './categories.module.css'
import { ForwardedRef, forwardRef } from 'react'

interface Props {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
}

const Categories = forwardRef(
  ({categories, setSelectedCategory, selectedCategory}: Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={styles.categories} >
      <button 
        className={!selectedCategory ? styles.active : styles.item} 
        onClick={() => setSelectedCategory(null)}
      >
      All
      </button>
      {categories.map((category) => {
        return (
          <button 
            className={selectedCategory === category ? styles.active : styles.item} 
            key={category} 
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
});

Categories.displayName = 'Categories';

export default Categories
