import { useCountryList } from '../../shared/hooks/useCountry';
import { Spinner, Error, Container } from '../../shared/components';
import CountryList from '../CountryList/CountryList';

const CountryAll = () => {
  const { isLoading, isError, data } = useCountryList();

  if (isLoading) return <Spinner />;

  if (isError) return <Error message="Unable to display countries" />;

  return (
    <Container>
      <CountryList data={data} />
    </Container>
  );
};

export default CountryAll;
