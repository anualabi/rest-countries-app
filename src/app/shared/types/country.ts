export interface Country {
  altSpellings: string[];
  area: number;
  borders?: string[];
  capital?: string[];
  capitalInfo: { latlng?: number[] };
  car: { signs?: string[]; side: 'left' | 'right' };
  cca2: string;
  cca3: string;
  ccn3?: string;
  cioc: string;
  coatOfArms: CoatOfArms;
  continents: Continent[];
  currencies?: Currencies;
  demonyms?: Demonyms;
  fifa?: string;
  flag: string;
  flags: CoatOfArms;
  idd: { root?: string; suffixes?: string[] };
  independent?: boolean;
  landlocked: boolean;
  languages?: { [key: string]: string };
  latlng: number[];
  maps: { googleMaps: string; openStreetMaps: string };
  name: {
    common: string;
    official: string;
    nativeName?: NativeName;
  };
  population: number;
  postalCode?: { format: string; regex?: string };
  region: Region;
  startOfWeek: string;
  status: Status;
  subregion?: string;
  timezones: string[];
  tld?: string[];
  translations: { [key: string]: Translation };
  unMember: boolean;
}

type Currencies = { [key: string]: { name: string; symbol: string } };

type Demonyms = { [key: string]: { f: string; m: string } };

type CoatOfArms = { png?: string; svg?: string };

type Translation = { official: string; common: string };

export type NativeName = { [key: string]: Translation };

enum Continent {
  Africa = 'Africa',
  Antarctica = 'Antarctica',
  Asia = 'Asia',
  Europe = 'Europe',
  NorthAmerica = 'North America',
  Oceania = 'Oceania',
  SouthAmerica = 'South America'
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania'
}

export enum Status {
  OfficiallyAssigned = 'officially-assigned',
  UserAssigned = 'user-assigned'
}

export type CountryProps = Pick<
  Country,
  'cca3' | 'flags' | 'name' | 'population' | 'region' | 'capital'
>;
