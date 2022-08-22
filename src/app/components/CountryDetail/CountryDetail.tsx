import styles from './CountryDetail.module.css';

type IDetail = { name: string; info: string | number };

const Detail = ({ name, info }: IDetail) => (
  <p className={styles.detail}>
    {name} <span>{info}</span>
  </p>
);

export default Detail;
