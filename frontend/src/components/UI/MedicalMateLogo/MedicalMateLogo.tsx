import { Link } from 'react-router-dom';
import styles from './MedicalMateLogo.module.scss';

interface IMedicalMateLogoProps {
  color?: string;
}

export const MedicalMateLogo = ({ color }: IMedicalMateLogoProps): JSX.Element => (
  <Link to="/" className={styles.logo}>
    <h3 className={styles.logo__wrapper}>
      <mark
        style={{
          color,
        }}
        className={styles.logo__bold}
      >
        Medical
      </mark>
      <mark
        style={{
          color,
        }}
        className={styles.logo__italic}
      >
        Mate
      </mark>
    </h3>
  </Link>
);
