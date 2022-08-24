import CountryItem from '../CountryItem/CountryItem';
import { useCountryList, useCountrySearch, useRegion } from '../../shared/hooks/useCountry';
import { Spinner, Error, Container } from '../../shared/components';
import styles from './CountryList.module.css';

type ICountryList = { searchTerm: string; selectedOption: string };

const CountryList = ({ searchTerm, selectedOption }: ICountryList) => {
  const countryListQuery = useCountryList();
  const countrySearchQuery = useCountrySearch(searchTerm);
  const regionQuery = useRegion(selectedOption);

  if (countrySearchQuery.isLoading || regionQuery.isLoading || countryListQuery.isLoading) {
    return <Spinner />;
  }

  if (countrySearchQuery.isError || regionQuery.isError || countryListQuery.isError) {
    return <Error message={`${searchTerm || 'countries'} not found.`} />;
  }

  const data = countrySearchQuery.data || regionQuery.data || countryListQuery.data;

  const countryList = data
    ?.slice(0, 24)
    .map((country) => <CountryItem key={country.ccn3} item={country} />);

  return <Container className={styles.countryList}>{countryList}</Container>;
};

export default CountryList;
