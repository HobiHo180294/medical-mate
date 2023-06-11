import { Link } from 'react-router-dom';
import styles from './MedicalMateLogo.module.scss';

export const MedicalMateLogo = (): JSX.Element => {
  return (
    <Link to="/" className={styles.logo}>
      <h3 className={styles.logo__wrapper}>
        <mark className={styles.logo__bold}>Medical</mark>
        <mark className={styles.logo__italic}>Mate</mark>
      </h3>
    </Link>
  );
};
