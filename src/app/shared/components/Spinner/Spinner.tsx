import Box from '../Box/Box';
import Container from '../Container/Container';
import { StyledSpinner, SpinnerProps } from './SpinnerStyles';

const Spinner = ({ size, borderWidth }: SpinnerProps) => {
  return (
    <StyledSpinner>
      <Container className="container">
        <Box
          className="spinner"
          style={{ width: `${size}px`, height: `${size}px`, borderWidth: `${borderWidth}px` }}
          children={undefined}
        ></Box>
      </Container>
    </StyledSpinner>
  );
};

export default Spinner;
