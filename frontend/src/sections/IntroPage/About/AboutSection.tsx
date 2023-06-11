import styles from './AboutSection.module.scss';
import {
  IntroPageContainer,
  MedicalMateLogo,
  IntroPageSectionTitle,
  TopicCard,
} from 'components/index';

export const AboutSection = (): JSX.Element => (
  <section id="about" className={styles.about}>
    <IntroPageContainer>
      <div className={styles.about__body}>
        <div className={`${styles.about__topbar} ${styles.topbar}`}>
          <IntroPageSectionTitle text="About">
            <MedicalMateLogo color="#223B38" />
          </IntroPageSectionTitle>
          <h4 className={`${styles.topbar__subtitle}`}>Advancing the Delivery of Health Care</h4>
        </div>

        <div className={`${styles.about__content} ${styles.content}`}>
          <div className={`${styles.content__info} ${styles.info}`}>
            <div className={`${styles.info__topics}`}>
              <TopicCard
                question="What is MedicalMate?"
                answer="MedicalMate is a healthcare organization that focus more on making a meaningful deggerence in patients’ lives."
              />
              <TopicCard
                question="What is our goal?"
                answer="MedicalMate is a healthcare organization that focus more on making a meaningful deggerence in patients’ lives."
              />
            </div>
            <div className={`${styles.info__text}`}>
              <p className={`${styles.info__text_paragraph}`}>
                The "MedicalMate" clinic has been the largest network of medical centers throughout
                Ukraine for over twelve years. We proudly and confidently offer our patients the
                services of highly qualified doctors.
              </p>

              <p className={`${styles.info__text_paragraph}`}>
                We value your trust and cherish our reputation by providing only high-quality
                services!
              </p>
            </div>
          </div>
          <div className={styles.content__image}>
            <img
              className={styles.content__image_pic}
              src="/assets/images/content/nature-image.png"
              alt={`We value your trust and cherish our reputation by providing only high-quality services!`}
            />
          </div>
        </div>
      </div>
    </IntroPageContainer>
  </section>
);
