import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className={stlyes.footerDiv}>
        <div>
        <Image 
              src="/midasLogo.png" 
              width={100}
              height={40} />
        </div>
        <div>
            <h3>Copyright © 2022 Midas.</h3>
        </div>
    </div>
  )
}

export default Footer;