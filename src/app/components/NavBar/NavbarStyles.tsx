import styled, { css } from 'styled-components';
import { width } from '../../shared/utils/styles';

export const StyledNavBar = styled.nav`
  ${css`
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px,
      rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    height: 70px;
    position: fixed;
    z-index: 1100;
    top: 0px;
    left: auto;
    right: 0px;
    width: 100%;
    background-color: ${(props) => props.theme.element};

    .container {
      display: flex;
      align-items: center;
    }

    .logo-text {
      font-size: 1.25rem;
      display: flex;
      align-items: center;
      height: 100%;
      margin: 0 auto 0 0;
      color: ${(props) => props.theme.text};
    }

    @media ${width.desktop} {
      height: 80px;

      .logo-text {
        font-size: 1.5rem;
      }
    }
  `}
`;
