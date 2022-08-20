import Card from '../../shared/components/Card/Card';
import { Country } from '../../shared/types/country';
// import { StyledCountryItem } from './CountryItemStyles';
import styles from './CountryItem.module.css';

type ICountryItem = { item: Country };

const CountryItem = ({ item }: ICountryItem) => {
  const { flags, name, population, region, capital } = item;

  return (
    <div className={styles.country}>
      <Card>
        <img className={styles.flag} src={flags.svg} alt={`${name.common} flag`} />
        <div className={styles.content}>
          <h2>{name.common}</h2>
          <p className={styles.info}>
            Population:
            <span>{population}</span>
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
