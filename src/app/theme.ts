import { color } from './shared/utils/styles';
import { ITheme } from './shared/types/theme';

const { lightGrayBg, darkBlueText, white, darkBlueBg, darkBlue, darkGray } = color;

export const lightTheme: ITheme = {
  bg: lightGrayBg,
  text: darkBlueText,
  element: white,
  input: darkGray
};

export const darkTheme: ITheme = {
  bg: darkBlueBg,
  text: white,
  element: darkBlue
};
