import styles from '../styles/FAQs.module.css'

const FAQs = () => {
  return (
    <div className={styles.container}>
        <div className={styles.accordian}>
            <div className={styles.accordianItem}>
                <button aria-expanded="false">
                    <span className={styles.accordianTitle}>Will it work?</span>
                    <span className={styles.icon} aria-hidden></span>
                </button>
                <div className={styles.accordianContent}>
                    <p>
                        This is the content
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQs