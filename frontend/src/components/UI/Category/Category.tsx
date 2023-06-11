import styles from './Category.module.scss';

interface ICategoryProps {
  title: string;
  padding: string;
}

export const Category = ({ title, padding }: ICategoryProps): JSX.Element => (
  <div className={styles.category} style={{ padding }}>
    <span className={styles.category__text}>{title}</span>
  </div>
);
