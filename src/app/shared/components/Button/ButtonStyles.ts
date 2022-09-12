import styled from 'styled-components';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  type?: 'button' | 'submit' | 'reset';
  variant?: undefined | 'text' | 'outline';
  disableShadow?: boolean;
  startIcon?: string;
  endIcon?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const StyledButton = styled.button<ButtonProps>`
  border-radius: 6px;
  border-width: 0px;
  box-sizing: border-box;
  box-shadow: ${(p) => (p.disableShadow ? 'none' : '0 4px 8px 0 rgba(0, 0, 0, 0.2)')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 1px;
  white-space: nowrap;
  min-width: auto;
  min-height: auto;
  padding: ${(p) => {
    if (p.size === 'lg') {
      return '1rem 1.25rem';
    } else if (p.size === 'sm') {
      return '.35rem .75rem';
    }
    return '0.75rem 1rem';
  }};
  .start-icon {
    margin-right: 0.3rem;
  }
  .end-icon {
    margin-left: 0.3rem;
  }
`;
