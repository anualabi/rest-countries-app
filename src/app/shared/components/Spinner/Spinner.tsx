import Container from '../Container/Container';
import styles from './Spinner.module.css';

type SpinnerProps = { className?: string; size?: string; borderWidth?: string };

const Spinner = ({ className, size, borderWidth }: SpinnerProps) => {
  return (
    <Container className={styles.container}>
      <div
        className={`${styles.spinner} ${className}`}
        style={{ width: `${size}px`, height: `${size}px`, borderWidth: `${borderWidth}px` }}
      ></div>
    </Container>
  );
};

export default Spinner;
