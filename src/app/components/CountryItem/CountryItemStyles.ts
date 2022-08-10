import styled, { css } from 'styled-components';
import { width, fontWeight } from '../../shared/utils/styles';

export const StyledCountryItem = styled.div`
  ${css`
    box-sizing: border-box;
    margin: 2rem auto;
    max-width: 280px;
    width: 100%;

    .card {
      min-height: 350px;
      width: 100%;
      background-color: ${(props) => props.theme.element};
    }

    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-bottom: 1px solid ${(props) => props.theme.bg};
    }

    .content {
      padding: 0 1rem;
      color: ${(props) => props.theme.text};

      p {
        ${fontWeight.extraBold};

        span {
          ${fontWeight.light};
          margin-left: 0.5rem;
        }
      }
    }

    @media ${width.desktop} {
      margin: 2rem 0;
    }
  `}
`;
