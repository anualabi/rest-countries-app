import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
  startIcon?: string;
  endIcon?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, startIcon, endIcon, ...props }, ref) => {
    return (
      <button className={`${styles.button} ${className}`} ref={ref} type="button" {...props}>
        {startIcon && <span className="material-icons start-icon">{startIcon}</span>}
        {children}
        {endIcon && <span className="material-icons end-icon">{endIcon}</span>}
      </button>
    );
  }
);

Button.propTypes = {
  startIcon: PropTypes.string,
  endIcon: PropTypes.string
};

Button.defaultProps = {
  startIcon: '',
  endIcon: ''
};

export default Button;
