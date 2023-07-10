import styles from './page.module.css'
export default function GridDifferentColumns(){
    return (
        <div className={styles.grid_wrapper}>
            <div className={`${styles.grid_item} ${styles.box1}`}>
                Image 1
            </div>
            <div className={`${styles.grid_item} ${styles.box2}`}>
                Image 2
            </div>
            <div className={`${styles.grid_item} ${styles.box3}`}>
                Image 3
            </div>
            <div className={`${styles.grid_item}`}>
                Image 4
            </div>
            <div className={`${styles.grid_item} ${styles.box5}`}>
                Image 5
            </div>
            <div className={`${styles.grid_item} ${styles.box6}`}>
                Image 6
            </div>
            <div className={`${styles.grid_item} ${styles.box7}`}>
                Image 7
            </div>
            <div className={`${styles.grid_item} ${styles.box8}`}>
                Image 8
            </div>
            <div className={`${styles.grid_item} ${styles.box9}`}>
                Image 9
            </div>
            {/* <div className={styles.grid_item}>
                4
            </div>
            <div className={styles.grid_item}>
                5
            </div>
            <div className={styles.grid_item}>
                6
            </div>
            <div className={styles.grid_item}>
                7
            </div>
            <div className={styles.grid_item}>
                8
            </div>
            <div className={styles.grid_item}>
                9
            </div> */}
        </div>
    )
}