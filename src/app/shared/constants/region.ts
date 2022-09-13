import { Region } from '../types/country';

interface RegionProps {
  key: keyof typeof Region;
  value: string;
}

export const region: RegionProps[] = [
  { key: 'Africa', value: 'africa' },
  { key: 'Americas', value: 'americas' },
  { key: 'Antarctic', value: 'antarctic' },
  { key: 'Asia', value: 'asia' },
  { key: 'Europe', value: 'europe' },
  { key: 'Oceania', value: 'oceania' }
];
