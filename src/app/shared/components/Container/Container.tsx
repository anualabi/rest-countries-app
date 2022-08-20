import { ReactNode } from 'react';
import styles from './Container.module.css';

type IContainer = { children: ReactNode };

const Container = ({ children }: IContainer) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
