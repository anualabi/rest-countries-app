import Container from '../Container/Container';
import styles from './Spinner.module.css';

type ISpinner = { size?: string; borderWidth?: string };

const Spinner = ({ size, borderWidth }: ISpinner) => {
  return (
    <Container className={styles.container}>
      <div
        className={styles.spinner}
        style={{ width: `${size}px`, height: `${size}px`, borderWidth: `${borderWidth}px` }}
      ></div>
    </Container>
  );
};

export default Spinner;
