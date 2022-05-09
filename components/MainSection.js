import styles from '../styles/MainSection.module.css'
import Image from 'next/image'

const MainSection = () => {
  return (
    <div>
        <div className={styles.dividerText}>
            <h1>No Visa or MasterCard? No problem</h1>
            <h2>Create a virtual miCard and load it with mobile money</h2>
        </div>
        <div className={styles.mainDiv}>
          <div className={styles.featuresSection}>
            <div className={styles.iconsDiv}>
              <div>
                <h2>Shop online from some of the <br/> largest global retailers </h2>
                <h3>Make orders and purchases from Amazon, Best Buy, <br/> Alibaba, Gamestop and many more without <br/> the hassle.</h3>
              </div>
              <div>
              <Image 
                src="/shop.png"
                className={styles.appPreview} 
                width={200}
                height={200} />
              </div>
            </div>

            <div className={styles.iconsDivFlipped}>
              <div>
                <h2>Pay for all your online subscriptions <br/> and monthly services </h2>
                <h3>Enjoy Netflix, Disney+, Spotify and other <br/> subscription based services all by yourself, <br/> no strings attached.</h3>
              </div>
              <div>
              <Image 
                src="/Netflix_icon.svg"
                className={styles.appPreview} 
                width={200}
                height={200} />
              </div>
            </div>

            <div className={styles.iconsDiv}>
              <div>
                <h2>Purchase items wherever <br/> credit cards are accepted </h2>
                <h3>miCards are accepted online on 100+ websites. <br/> Ready to use wherever and whenever you need it.</h3>
              </div>
              <div>
              <Image 
                src="/credit-card.png"
                className={styles.appPreview} 
                width={200}
                height={200} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.dividerText}>
            <h1>Stay in charge of your money</h1>
            <h2>Have full control of where and how your money is spent</h2>
        </div>
        <div className={styles.sicDiv}>

        </div>

        <div className={styles.dividerText}>
          <h1>Midas is safe and secure</h1>
          <h2>Make online payments with 100% security.</h2>
        </div>

        <div className={styles.dividerText}>
          <h1>Frequently Asked Questions</h1>
        </div>
    </div>
  )
}

export default MainSection;