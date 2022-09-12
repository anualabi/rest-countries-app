import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton, ButtonProps } from './ButtonStyles';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, startIcon, endIcon, ...props }, ref) => {
    return (
      <StyledButton ref={ref} {...props}>
        {startIcon && <span className="material-symbols-outlined start-icon">{startIcon}</span>}
        {children}
        {endIcon && <span className="material-symbols-outlined end-icon">{endIcon}</span>}
      </StyledButton>
    );
  }
);

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf([undefined, 'outline', 'text']),
  disableShadow: PropTypes.bool,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

Button.defaultProps = {
  type: 'button',
  variant: undefined,
  disableShadow: true,
  startIcon: '',
  endIcon: '',
  size: 'sm'
};

export default Button;
