import { MedicalMateLogo, NavMenu, PrimaryButton } from 'components/index';
import { TNavMenuItem } from 'types/TNavMenuItem';
import styles from './Header.module.scss';

const NavMenuItems: TNavMenuItem[] = [
  {
    _id: 0,
    content: 'About',
    href: '#about',
  },
  {
    _id: 1,
    content: 'Departments',
    href: '#departments',
  },
  {
    _id: 2,
    content: 'Doctors',
    href: '#doctors',
  },
  {
    _id: 3,
    content: 'Price',
    href: '#price',
  },
  {
    _id: 4,
    content: 'Feedback',
    href: '#feedback',
  },
];

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__container} ${styles._container}`}>
        <div className={`${styles.header__body}`}>
          <MedicalMateLogo />
          <NavMenu contentArray={NavMenuItems} linkType="AnchorLink" />
          <PrimaryButton padding="1.1rem 0 0.8rem" text="Sign in" href="/login" />
        </div>
      </div>
    </header>
  );
};
