import { useCountryList } from '../../shared/hooks/useCountry';
import { Spinner, Error } from '../../shared/components';
import CountryList from '../CountryList/CountryList';

const CountryAll = () => {
  const { isLoading, isError, data } = useCountryList();

  if (isLoading) return <Spinner />;

  if (isError) return <Error message="Unable to display countries" />;

  return <CountryList data={data} />;
};

export default CountryAll;
