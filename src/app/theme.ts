import { color } from './shared/utils/styles';

const { lightGrayBg, darkBlueText, white, darkBlueBg, darkBlue, darkGray } = color;

export const lightTheme = {
  bg: lightGrayBg,
  text: darkBlueText,
  element: white,
  input: darkGray
};

export const darkTheme = {
  bg: darkBlueBg,
  text: white,
  element: darkBlue
};
