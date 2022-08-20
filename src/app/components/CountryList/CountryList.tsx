import CountryItem from '../CountryItem/CountryItem';
import { ICountry } from '../../shared/types/country';
import styles from './CountryList.module.css';

type ICountryList = { data: ICountry[] | undefined };

const CountryList = ({ data }: ICountryList) => {
  const countryList = data
    ?.slice(0, 24)
    .map((country) => <CountryItem key={country.ccn3} item={country} />);

  return <div className={styles.countryList}>{countryList}</div>;
};

export default CountryList;
