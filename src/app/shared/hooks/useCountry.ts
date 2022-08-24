import { useQuery } from 'react-query';
import { ICountry } from '../types/country';
import { fetchData } from '../../services/country';

const apiUrl = process.env.REACT_APP_API;

export function useCountryList() {
  return useQuery<ICountry[], Error>(['countryList'], () => fetchData(`${apiUrl}/all`), {
    refetchOnWindowFocus: false
  });
}

export function useCountryItem(code: string | undefined) {
  return useQuery<ICountry[], Error>(
    ['countryItem', code],
    () => fetchData(`${apiUrl}/alpha/${code}`),
    {
      enabled: Boolean(code !== undefined),
      refetchOnWindowFocus: false
    }
  );
}

export function useCountryCode(codes: string | undefined) {
  return useQuery<ICountry[], Error>(
    ['countryCode', codes],
    () => fetchData(`${apiUrl}/alpha?codes=${codes}`),
    {
      enabled: !!codes,
      refetchOnWindowFocus: false
    }
  );
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
      enabled: !!region,
      refetchOnWindowFocus: false
    }
  );
}
