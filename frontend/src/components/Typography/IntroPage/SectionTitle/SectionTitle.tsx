import { ReactNode } from 'react';
import styles from './SectionTitle.module.scss';

interface ISectionTitleProps {
  text: string;
  children?: ReactNode;
}

export const SectionTitle = ({ text, children }: ISectionTitleProps): JSX.Element => (
  <div className={styles.title}>
    <h2 className={styles.title__value}>{text}</h2>
    {children}
  </div>
);
