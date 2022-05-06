import styles from '../styles/MainSection.module.css'

const MainSection = () => {
  return (
    <div>
        <div className={styles.dividerText}>
            <h1>No Visa or MasterCard? No problem</h1>
            <h2>Create a virtual miCard and load it with mobile money</h2>
        </div>
        <div className={styles.mainDiv}>
          <div className={styles.featuresSection}>
            <div className={styles.iconOne}>
              <h2>Shop online from some of the <br/> largest global retailers </h2>
              <h3>Make orders and purchases from Amazon, Best Buy, <br/> Alibaba, Gamestop and many more without <br/> the hassle.</h3>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainSection;