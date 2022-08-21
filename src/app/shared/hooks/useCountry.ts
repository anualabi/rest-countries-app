import { useQuery } from 'react-query';
import { ICountry } from '../types/country';
import { fetchData } from '../../services/country';

const apiUrl = process.env.REACT_APP_API;

export function useCountryList() {
  return useQuery<ICountry[], Error>(['countryList'], () => fetchData(`${apiUrl}/all`), {
    refetchOnWindowFocus: false
  });
}

export function useCountrySearch(countryName: string) {
  return useQuery<ICountry[], Error>(
    ['countrySearch', countryName],
    () => fetchData(`${apiUrl}/name/${countryName}`),
    {
      enabled: Boolean(countryName.length > 1),
      retry: 1,
      refetchOnWindowFocus: false
    }
  );
}

export function useRegion(region: string) {
  return useQuery<ICountry[], Error>(
    ['continent', region],
    () => fetchData(`${apiUrl}/region/${region}`),
    {
      refetchOnWindowFocus: false
    }
  );
}
