import CountryItem from '../CountryItem/CountryItem';
import { StyledCountryList } from './CountryListStyles';
import { ICountry } from '../../shared/types/country';

type ICountryList = { data: ICountry[] | undefined };

const CountryList = ({ data }: ICountryList) => {
  const countryList = data
    ?.slice(0, 24)
    .map((country) => <CountryItem key={country.ccn3} item={country} />);

  return <StyledCountryList>{countryList}</StyledCountryList>;
};

export default CountryList;
