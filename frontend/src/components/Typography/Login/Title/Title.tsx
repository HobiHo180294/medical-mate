import styles from './Title.module.scss';

interface ITtileProps {
  text: string;
  className?: string;
}

export const Title = ({ text, className }: ITtileProps): JSX.Element => {
  return <h2 className={`${styles.title} ${className}`}>{text}</h2>;
};
