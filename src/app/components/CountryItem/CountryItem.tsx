import Card from '../../shared/components/Card/Card';
import { Country } from '../../shared/types/country';
import styles from './CountryItem.module.css';

type ICountryItem = { item: Country };

const CountryItem = ({ item }: ICountryItem) => {
  const { flags, name, population, region, capital } = item;

  return (
    <div className={styles.country}>
      <Card>
        <img className={styles.flag} src={flags.svg} alt={`${name.common} flag`} />
        <div className={styles.content}>
          <h2 className={styles.countryName}>{name.common}</h2>
          <p className={styles.info}>
            Population:
            <span>{population && population.toLocaleString()}</span>
          </p>
          <p className={styles.info}>
            Region:
            <span>{region}</span>
          </p>
          <p className={styles.info}>
            Capital:
            <span>{capital}</span>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CountryItem;
