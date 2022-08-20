import React from 'react';
import PropTypes from 'prop-types';
import { FieldContext } from './FieldContext';
import styles from './Field.module.css';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  className?: string;
  startIcon?: string;
  endIcon?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, startIcon, endIcon, ...props }, ref) => {
    const id = React.useContext(FieldContext);

    return (
      <div className={`${styles.inputGroup} ${className}`}>
        {startIcon && (
          <span className={`material-symbols-outlined ${styles.startIcon} ${className}`}>
            {startIcon}
          </span>
        )}
        <input className={`${styles.input} ${className}`} ref={ref} id={id} {...props} />
        {endIcon && (
          <span className={`material-symbols-outlined ${styles.endIcon} ${className}`}>
            {endIcon}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Field.Input';

Input.propTypes = {
  startIcon: PropTypes.string,
  endIcon: PropTypes.string
};

Input.defaultProps = {
  startIcon: '',
  endIcon: ''
};
