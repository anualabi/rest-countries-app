import Container from '../Container/Container';
import styles from './Spinner.module.css';

type ISpinner = { className?: string; size?: string; borderWidth?: string };

const Spinner = ({ className, size, borderWidth }: ISpinner) => {
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
