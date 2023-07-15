import { MouseEventHandler } from 'react';

import { Link } from 'react-router-dom';
import styles from './ContentBlock.module.scss';

interface IContentBlock {
  title: string;
  link?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const ContentBlock = ({ title, link, onClick }: IContentBlock) => (
  <div onClick={onClick} className={styles.block}>
    {link ? <Link to={link}>{title}</Link> : <span>{title}</span>}
  </div>
);
