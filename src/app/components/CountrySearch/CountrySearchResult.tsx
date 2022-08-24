import { Spinner, Error, Container } from '../../shared/components';
import { useCountrySearch } from '../../shared/hooks/useCountry';
import CountryList from '../CountryList/CountryList';

type ISearchCountryResult = { searchTerm: string };

const SearchCountryResult = ({ searchTerm }: ISearchCountryResult) => {
  const { isLoading, isError, data } = useCountrySearch(searchTerm);

  if (isLoading) return <Spinner />;

  if (isError) return <Error message={`"${searchTerm}" not found.`} />;

  return (
    <Container>
      <CountryList data={data} />
    </Container>
  );
};

export default SearchCountryResult;
