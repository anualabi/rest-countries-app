import { ReactNode } from 'react';
import styles from './Card.module.css';

type CardProps = { className?: string; children: ReactNode };

const Card = ({ className, children }: CardProps) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
