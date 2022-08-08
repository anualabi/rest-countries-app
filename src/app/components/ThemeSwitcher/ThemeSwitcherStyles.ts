import styled, { css } from 'styled-components';
import { width } from '../../shared/utils/styles';

export const StyledThemeSwitcher = styled.button`
  ${css`
    background-color: inherit;
    color: ${(props) => props.theme.text};
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    font-weight: 600;
    display: flex;
    align-items: center;

    p {
      display: none;
      margin-left: 0.5rem;
    }

    @media ${width.desktop} {
      p {
        display: block;
      }
    }
  `}
`;
