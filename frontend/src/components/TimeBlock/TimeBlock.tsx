import { DOMAttributes, MouseEventHandler } from 'react';
import styles from './TimeBlock.module.scss';

interface ITime {
  time: string;
  onClick?: DOMAttributes<HTMLDivElement>['onClick'];
}

export const TimeBlock = ({ time, onClick }: ITime) => {
  return (
    <div onClick={onClick} className={styles.timeblock}>
      {time}
    </div>
  );
};
