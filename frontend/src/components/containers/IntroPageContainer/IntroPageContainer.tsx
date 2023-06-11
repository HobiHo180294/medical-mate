import { ReactNode } from 'react';
import styles from './IntroPageContainer.module.scss';

interface IIntroPageContainer {
  children: ReactNode;
}

export const IntroPageContainer = ({ children }: IIntroPageContainer): JSX.Element => (
  <div className={styles['intro-page-container']}>{children}</div>
);
