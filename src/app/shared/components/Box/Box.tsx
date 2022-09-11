import { StyledBox, BoxProps } from './BoxStyles';

const Box = ({ children, ...props }: BoxProps) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};

export default Box;
