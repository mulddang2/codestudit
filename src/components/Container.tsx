import classNames from 'classnames';
import styles from './Container.module.css';

import { ReactNode } from 'react';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

function Container({ className, children }: ContainerProps) {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
}

export default Container;
