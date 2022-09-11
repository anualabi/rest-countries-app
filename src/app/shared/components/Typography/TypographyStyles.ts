import React from 'react';
import styled, { css } from 'styled-components';

export interface TypographyProps extends React.ComponentPropsWithoutRef<'div'> {
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  variant?: 'p' | 'h1' | 'h2' | 'h3' | 'inherit';
}

const textProperties = (p: TypographyProps) => {
  let fontSizeSm = 1;
  let fontSizeLg = 1.2;
  let fontWeight = 700;
  let textAlign = 'inherit';

  if (p.variant === 'h1') {
    fontSizeSm = 2.8;
    fontSizeLg = 4;
  } else if (p.variant === 'h2') {
    fontSizeSm = 2.5;
    fontSizeLg = 3.5;
  } else if (p.variant === 'h3') {
    fontSizeSm = 2.2;
    fontSizeLg = 3;
  } else if (p.variant === 'p') {
    fontWeight = 400;
  }

  if (p.align === 'center') {
    textAlign = 'center';
  } else if (p.align === 'justify') {
    textAlign = 'justify';
  } else if (p.align === 'left') {
    textAlign = 'left';
  } else if (p.align === 'right') {
    textAlign = 'right';
  }

  return css`
    font-size: ${fontSizeSm}rem;
    font-weight: ${fontWeight};
    text-align: ${textAlign};

    @media screen and (min-width: 992px) {
      font-size: ${fontSizeLg}rem;
    }
  `;
};

export const StyledH1 = styled.h1<TypographyProps>`
  ${textProperties}
`;

export const StyledH2 = styled.h2<TypographyProps>`
  ${textProperties}
`;

export const StyledParagraph = styled.p<TypographyProps>`
  ${textProperties}
`;
