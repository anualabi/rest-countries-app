import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type IContainer = { children: ReactNode };

const Container = ({ children }: IContainer) => {
  return <StyledContainer className="container">{children}</StyledContainer>;
};

export const StyledContainer = styled.div`
  ${css`
    box-sizing: border-box;
    display: block;
    margin: 0 auto;
    max-width: 1366px;
    height: 100%;
    width: 100%;
    padding: 0 1rem;
  `}
`;

export default Container;
