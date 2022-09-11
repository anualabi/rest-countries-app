import Container from '../Container/Container';
import Typography from '../Typography/Typography';
import { StyledErrorMessage, ErrorProps } from './ErrorStyles';

const ErrorMessage = ({ message }: ErrorProps) => {
  return (
    <StyledErrorMessage>
      <Container>
        <Typography className="error">{message}</Typography>
      </Container>
    </StyledErrorMessage>
  );
};

export default ErrorMessage;
