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
    <div class={styles.container}>
      <div class={styles.accordion}>
        <div class={styles.accordionItem}>
          <button id="accordion-button-1" aria-expanded={isToggled1} onClick={toggler1}>
            <span class={styles.accordionTitle}>Question 1</span>
            <span class={styles.icon} aria-hidden="true"></span>
          </button>
          <div class={styles.accordionContent}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut.
              Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>

        <div class={styles.accordionItem}>
          <button id="accordion-button-1" aria-expanded={isToggled2} onClick={toggler2}>
            <span class={styles.accordionTitle}>Question 2</span>
            <span class={styles.icon} aria-hidden="true"></span>
          </button>
          <div class={styles.accordionContent}>
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