import styled from 'styled-components';

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

export const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
