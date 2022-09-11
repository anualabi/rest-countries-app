import styled from 'styled-components';

export interface BoxProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

export const StyledBox = styled.div`
  box-sizing: border-box;
  width: 100%;
`;
