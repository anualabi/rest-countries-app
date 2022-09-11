import axios from 'axios';

export const fetchData = async <T>(url: string): Promise<T> => {
  const { data } = await axios.get(url);
  return data as T;
};
