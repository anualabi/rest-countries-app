type ITranslation = { official: string; common: string };

type ITranslations = { [key: string]: ITranslation };

type ICurrency = { [key: string]: { name: string; symbol: string } };

type INativeName = { [key: string]: { official: string; common: string } };

type IDemonyms = { [key: string]: { f: string; m: string } };

export interface ICountry {
  altSpellings: string[];
  area: number;
  borders: string[];
  capital: string[];
  capitalInfo: { latlng: number[] };
  car: { signs: string[]; side: string };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: { png: string; svg: string };
  continents: string[];
  currencies: ICurrency;
  demonyms: IDemonyms;
  fifa: string;
  flag: string;
  flags: { png: string; svg: string };
  idd: { root: string; suffixes: string[] };
  independent: boolean;
  landlocked: boolean;
  languages: { [key: string]: string };
  latlng: number[];
  maps: { googleMaps: string; openStreetMaps: string };
  name: {
    common: string;
    official: string;
    nativeName: INativeName;
  };
  population: number;
  postalCode: { format: string; regex: string };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: ITranslations;
  unMember: boolean;
}

export type Country = Pick<ICountry, 'flags' | 'name' | 'population' | 'region' | 'capital'>;
