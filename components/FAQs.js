import styles from '../styles/FAQs.module.css'
import {useRef, useEffect, useState} from 'react';

const FAQs = () => {
  const [isToggled1, setIsToggled1] = useState(false);
  const [isToggled2, setIsToggled2] = useState(false);

  const toggler1 = () => {
    isToggled1 ? setIsToggled1(false) : setIsToggled1(true);
  }

  const toggler2 = () => {
    isToggled2 ? setIsToggled2(false) : setIsToggled2(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.accordion}>
        <div className={styles.accordionItem}>
          <button id="accordion-button-1" aria-expanded={isToggled1} onClick={toggler1}>
            <span className={styles.accordionTitle}>Question 1</span>
            <span className={styles.icon} aria-hidden="true"></span>
          </button>
          <div className={styles.accordionContent}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Elementu sagittis vitae et leo duis ut.
              Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>

        <div className={styles.accordionItem}>
          <button id="accordion-button-1" aria-expanded={isToggled2} onClick={toggler2}>
            <span className={styles.accordionTitle}>Question 2</span>
            <span className={styles.icon} aria-hidden="true"></span>
          </button>
          <div className={styles.accordionContent}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut.
              Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQs