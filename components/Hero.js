import styles from '../styles/Hero.module.css'
import Image from 'next/image'


const Hero = () => {
  return (
    <div className={styles.heroDiv}>
      <div className={styles.heroLeft}>
        <h1>Virtual credit cards <br/> powered by <br/> <strong style={{ color: "#FDD511", }}>mobile money</strong></h1>
        <h2>
          Seamlessly create unlimited virtual credit cards <br/> to 
          shop online, pay for subscriptions, <br/> services and more, with 
          nothing else but <br/> mobile money
        </h2>

        <button className={styles.waitlistBtn}>Join the waitlist</button>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.yellowCircle}>
        
        </div>
        <Image 
            src="/app_preview.png"
            className={styles.appPreview} 
            width={400}
            height={600} />
      </div>
    </div>
  )
}

export default Hero;