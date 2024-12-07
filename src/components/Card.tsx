import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Card.module.css';

interface CardProps {
  className?: string;
  children: ReactNode;
}

function Card({ className, children }: CardProps) {
  return <div className={classNames(styles.card, className)}>{children}</div>;
}

export default Card;
