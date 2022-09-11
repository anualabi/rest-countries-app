import styled from 'styled-components';

export interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

export const StyledContainer = styled.div<ContainerProps>`
  margin: 0 auto;
  max-width: ${(p) => {
    if (p.maxWidth === 'sm') {
      return '576px';
    } else if (p.maxWidth === 'md') {
      return '768px';
    } else if (p.maxWidth === 'xl') {
      return '1200px';
    } else if (p.maxWidth === 'xxl') {
      return '1366px';
    }
    return '992px';
  }};
  width: 100%;
`;
