import { ReactNode } from 'react';
import styles from './Container.module.css';

type IContainer = { className?: string; children: ReactNode };

const Container = ({ children, className }: IContainer) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
