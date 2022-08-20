import { ReactNode } from 'react';
import styles from './Card.module.css';

type Children = { className?: string; children: ReactNode };

const Card = ({ className, children }: Children) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
