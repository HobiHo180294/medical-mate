import { Link } from 'react-router-dom';
import styles from './PrimaryButton.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { LoadingButtonProps } from '@mui/lab';

interface IPrimaryButtonProps {
  text: string;
  padding: string;
  href?: string;
  type?: LoadingButtonProps['type'];
}

export const PrimaryButton = ({ text, href, padding, type }: IPrimaryButtonProps): JSX.Element => (
  <>
    {href ? (
      href.includes('#') ? (
        <AnchorLink
          href={href}
          className={`${styles['primary-button']} ${styles.link}`}
          style={{
            padding,
          }}
        >
          {text}
        </AnchorLink>
      ) : (
        <Link
          to={href}
          className={`${styles['primary-button']} ${styles.link}`}
          style={{
            padding,
          }}
        >
          {text}
        </Link>
      )
    ) : (
      <button
        className={`${styles['primary-button']} ${styles.button}`}
        style={{
          padding,
        }}
        type={type}
      >
        {text}
      </button>
    )}
  </>
);
