import { Link } from 'react-router-dom';
import Card from '../../shared/components/Card/Card';
import { Country } from '../../shared/types/country';
import Detail from '../CountryDetail/CountryDetail';
import styles from './CountryItem.module.css';

type ICountryItem = { item: Country };

const CountryItem = ({ item }: ICountryItem) => {
  const { ccn3, flags, name, population, region, capital } = item;

  return (
    <Link className={styles.country} to={ccn3}>
      <Card className={styles.card}>
        <img className={styles.flag} src={flags.svg} alt={`${name.common} flag`} />
        <div className={styles.content}>
          <h2 className={styles.countryName}>{name.common}</h2>
          <Detail name="Population:" info={population && population.toLocaleString()} />
          <Detail name="Region:" info={region} />
          <Detail name="Capital:" info={capital && capital[0]} />
        </div>
      </Card>
    </Link>
  );
};

export default CountryItem;
