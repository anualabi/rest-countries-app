import { ReactNode } from 'react';
import styles from './Container.module.css';

type ContainerProps = { className?: string; children: ReactNode };

const Container = ({ children, className }: ContainerProps) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
