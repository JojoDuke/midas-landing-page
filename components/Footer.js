import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className={styles.footerDiv}>
        <div className={styles.logoDiv}>
        <Image 
              src="/midasWhite.png" 
              width={100}
              height={40} 
              />
        </div>
        <div className={styles.socials}>
          <FontAwesomeIcon className={styles.socialsIcon} icon={faTwitter}/>
          <FontAwesomeIcon className={styles.socialsIcon} icon={faInstagram}/>
          <FontAwesomeIcon className={styles.socialsIcon} icon={faEnvelope}/>
        </div>
        <div className={styles.copyright}>
            <h3>Copyright © 2022 Midas.</h3>
        </div>
    </div>
  )
}

export default Footer;