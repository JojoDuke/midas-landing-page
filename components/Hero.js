import styles from '../styles/Hero.module.css'

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
        <h3>New</h3>
      </div>
    </div>
  )
}

export default Hero;