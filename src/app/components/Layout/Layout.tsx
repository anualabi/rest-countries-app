import React from 'react';
import styles from './Layout.module.css';

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
