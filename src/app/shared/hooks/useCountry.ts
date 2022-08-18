import { useQuery } from 'react-query';
import { ICountry } from '../types/country';
import { fetchData } from '../../services/country';

const apiUrl = process.env.REACT_APP_API;

export function useCountryList() {
  return useQuery<ICountry[], Error>(['countryList'], () => fetchData(`${apiUrl}/all`), {
    refetchOnWindowFocus: false
  });
}
