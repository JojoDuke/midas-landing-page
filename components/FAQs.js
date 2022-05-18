import styles from '../styles/FAQs.module.css'
import {useRef, useEffect, useState} from 'react';

const FAQs = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggler = () => {
    isToggled ? setIsToggled(false) : setIsToggled(true);
  }

  return (
    <div class={styles.container}>
      <div class={styles.accordion}>
        <div class={styles.accordionItem}>
          <button id="accordion-button-1" aria-expanded={isToggled} onClick={toggler}>
            <span class={styles.accordionTitle}>Why is the moon sometimes out during the day?</span>
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
          <button id="accordion-button-1" aria-expanded={isToggled} onClick={toggler}>
            <span class={styles.accordionTitle}>Why is the moon sometimes out during the day?</span>
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