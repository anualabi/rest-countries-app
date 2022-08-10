import { useCountryList } from '../../services/country';
import { Container, Spinner, Error } from '../../shared/components';
import CountryItem from '../CountryItem/CountryItem';
import { StyledCountryList } from './CountryListStyles';

const CountryList = () => {
  const { isLoading, isError, data } = useCountryList();

  if (isLoading) return <Spinner />;

  if (isError) return <Error message="Unable to display countries" />;

  const countryList = data
    ?.slice(0, 12)
    .map((country) => <CountryItem key={country.ccn3} item={country} />);

  return (
    <Container>
      <StyledCountryList>{countryList}</StyledCountryList>
    </Container>
  );
};

export default CountryList;
