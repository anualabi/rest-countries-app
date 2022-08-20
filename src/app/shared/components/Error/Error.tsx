import styles from './Error.module.css';

type IError = { message: string };

const Error = ({ message }: IError) => {
  return <p className={styles.error}>{message}</p>;
};

export default Error;
