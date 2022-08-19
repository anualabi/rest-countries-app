import styled, { css } from 'styled-components';
import { width } from '../../shared/utils/styles';

export const StyledCountryList = styled.div`
  ${css`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 1rem;
    width: 100%;

    @media ${width.desktop} {
      column-gap: 58px;
    }
  `}
`;
