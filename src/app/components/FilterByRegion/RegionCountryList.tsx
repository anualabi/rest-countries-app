import { Spinner, Error } from '../../shared/components';
import { useRegion } from '../../shared/hooks/useCountry';
import CountryList from '../CountryList/CountryList';

type IRegionCountryList = { region: string };

const RegionCountryList = ({ region }: IRegionCountryList) => {
  const { isLoading, isError, data } = useRegion(region);

  if (isLoading) return <Spinner />;

  if (isError) return <Error message={`Unable to display countries in ${region}.`} />;

  return <CountryList data={data} />;
};

export default RegionCountryList;
