import React, { ReactNode } from 'react';
import './Layout.scss';

import Header from '../components/layout/Header'
import createBEM from '../utils/createBEM';

type LayoutProps = {
  children: ReactNode | ReactNode[];
}

const BEM = createBEM('Layout');

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={BEM()}>
    <Header />
    {children}
  </div>
);

export default Layout;
