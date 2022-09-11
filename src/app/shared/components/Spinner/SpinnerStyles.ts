import styled from 'styled-components';

export interface SpinnerProps {
  size?: string;
  borderWidth?: string;
}

export const StyledSpinner = styled.div`
  display: flex;
  height: 80vh;

  .container {
    min-height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container > .spinner {
    border: 10px solid var(--text);
    border-top: 10px solid transparent;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: spin 1s linear infinite;
    transition: all 0.5s;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
