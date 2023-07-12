import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        Header
      </div>
      <div className={styles.main}>
        <div className={styles.aside}>
          Aside
        </div>
        <div className={styles.article}>
          <div className={styles.article_wrapper}>
            Article
          </div>
          <div className={styles.image_block}>
            <div className={styles.image_item}>
              Image
            </div>
            <div className={styles.image_item}>
              Image
            </div>
            <div className={styles.image_item}>
              Image
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        Footer
      </div>
    </div>
  )
}
