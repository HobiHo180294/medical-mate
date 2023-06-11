import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface ILayoutProps {
  header?: ReactNode;
  footer?: ReactNode;
}

export const Layout = ({ header, footer }: ILayoutProps): JSX.Element => (
  <>
    {header}
    <main className="page">
      <Outlet />
    </main>
    {footer}
  </>
);
