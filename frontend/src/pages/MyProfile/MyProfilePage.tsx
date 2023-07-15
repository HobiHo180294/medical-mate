import { Event } from 'components/index';
import styles from './MyProfilePage.module.scss';

export const MyProfilePage = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__body}>
        <div className={styles.profile__upcoming}>
          <Event title="Upcoming events" />
        </div>
        <div className={styles.profile__previous}>
          <Event title="Previous events" />
        </div>
      </div>
    </div>
  );
};
