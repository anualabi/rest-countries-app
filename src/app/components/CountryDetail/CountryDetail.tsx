import styles from './CountryDetail.module.css';

type DetailProps = { name: string; info?: string | number };

const Detail = ({ name, info }: DetailProps) => (
  <p className={styles.detail}>
    {name} <span>{info}</span>
  </p>
);

export default Detail;
