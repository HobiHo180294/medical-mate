import { IntroPageContainer, PrimaryButton } from 'components/index';
import styles from './HeroSection.module.scss';

export const HeroSection = (): JSX.Element => (
  <section className={styles.hero}>
    <IntroPageContainer>
      <div className={`${styles.hero__body}`}>
        <div className={`${styles.hero__column} ${styles['content-column']}`}>
          <h1 className={`${styles['content-column__title']}`}>Medical Healthcare Solutions</h1>
          <p className={`${styles['content-column__credo']}`}>
            Health is the condition of wisdom and the sign is cheerfulness
          </p>
          <PrimaryButton padding="1.2rem 0" text="Book an Appointment" href="/login" />
        </div>
        <div className={`${styles.hero__column} ${styles['image-column']}`}>
          <img
            className={`${styles['image-column__picture']}`}
            src="/assets/images/content/hero-image.png"
            alt="Health is the condition of wisdom and the sign is cheerfulness"
          />
        </div>
      </div>
    </IntroPageContainer>
  </section>
);
