import { ForwardRefExoticComponent, RefAttributes } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, NavLink, LinkProps, NavLinkProps } from 'react-router-dom';
import { TNavMenuItem } from 'types/TNavMenuItem';
import styles from './NavMenu.module.scss';

type TNavMenuLinkComponent = 'AnchorLink' | 'NavLink' | 'Link';
type TGetLinkComponentReturn =
  | ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>
  | typeof AnchorLink
  | ForwardRefExoticComponent<NavLinkProps & RefAttributes<HTMLAnchorElement>>;

interface INavMenuProps {
  contentArray: TNavMenuItem[];
  linkType: TNavMenuLinkComponent;
}

export const NavMenu = ({ contentArray, linkType }: INavMenuProps) => {
  const getLinkComponent = (): TGetLinkComponentReturn => {
    switch (linkType) {
      case 'AnchorLink':
        return AnchorLink;
      case 'NavLink':
        return NavLink;
      case 'Link':
        return Link;
    }
  };

  const LinkComponent = getLinkComponent();

  return (
    <nav className={`${styles.menu}`}>
      <ul className={`${styles.menu__list} ${styles._mr51}`}>
        {contentArray.map(({ _id, content, href }) => (
          <li className={styles.menu__item} key={_id}>
            {LinkComponent === AnchorLink ? (
              <LinkComponent className={styles.menu__link} href={href}>
                {content}
              </LinkComponent>
            ) : (
              <LinkComponent className={styles.menu__link} to={href}>
                {content}
              </LinkComponent>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
