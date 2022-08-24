import React from 'react';
import styles from './Layout.module.css';

type ILayout = { children: React.ReactNode };

const Layout = ({ children }: ILayout) => {
  return <div className={styles.layout}>{children}</div>;
};

export default Layout;
