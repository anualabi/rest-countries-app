import styled from 'styled-components';

export interface ErrorProps {
  message: string;
}

export const StyledErrorMessage = styled.div`
  .error {
    color: red;
    font-size: 1.2rem;
    text-align: center;
  }
`;
