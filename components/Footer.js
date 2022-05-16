import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className={styles.footerDiv}>
        <div className={styles.logoDiv}>
        <Image 
              src="/midasLogo.png" 
              width={100}
              height={40} />

        <div className={styles.bar}/>
        <h2>Socials</h2>
        </div>
        <div className={styles.copyright}>
            <h3>Copyright © 2022 Midas.</h3>
        </div>
    </div>
  )
}

export default Footer;