import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Children = { children: ReactNode };

const Card = ({ children }: Children) => {
  return <StyledCard className="card">{children}</StyledCard>;
};

const StyledCard = styled.div`
  ${css`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  `}
`;

export default Card;
