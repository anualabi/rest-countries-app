import Container from '../Container/Container';
import styles from './Error.module.css';

type ErrorProps = { className?: string; message: string };

const Error = ({ className, message }: ErrorProps) => {
  return (
    <Container>
      <p className={`${styles.error} ${className}`}>{message}</p>
    </Container>
  );
};

export default Error;
