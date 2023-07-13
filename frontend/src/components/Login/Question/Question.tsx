import { Link } from 'react-router-dom';
import styles from './Question.module.scss';

interface IQuestionProps {
  route: string;
  question: string;
  action: string;
  className?: string;
}

export const Question = ({ route, question, action, className }: IQuestionProps): JSX.Element => {
  return (
    <div className={`${styles.login__question} ${className}`}>
      <Link className={styles.login__link} to={route}>
        <span className={styles.login__subject}>{question + ' '}</span>
        <span className={styles.login__action}>{action}</span>
      </Link>
    </div>
  );
};
