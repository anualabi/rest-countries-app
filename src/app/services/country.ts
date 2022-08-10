import axios from 'axios';
import { useQuery } from 'react-query';
import { ICountry } from '../shared/types/country';

const countryListUrl = 'https://restcountries.com/v3.1/all';

const fetchData = async <T>(url: string): Promise<T> => {
  const { data } = await axios.get(url);
  return data as T;
};

export function useCountryList() {
  return useQuery<ICountry[], Error>(['countryList'], () => fetchData(countryListUrl), {
    refetchOnWindowFocus: false
  });
}
