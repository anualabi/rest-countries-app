import Card from '../../shared/components/Card/Card';
import { Country } from '../../shared/types/country';
import { StyledCountryItem } from './CountryItemStyles';

type ICountryItem = { item: Country };

const CountryItem = ({ item }: ICountryItem) => {
  const { flags, name, population, region, capital } = item;

  return (
    <StyledCountryItem>
      <Card>
        <img src={flags.svg} alt={`${name.common} flag`} />
        <div className="content">
          <h2>{name.common}</h2>
          <p>
            Population:
            <span>{population}</span>
          </p>
          <p>
            Region:
            <span>{region}</span>
          </p>
          <p>
            Capital:
            <span>{capital}</span>
          </p>
        </div>
      </Card>
    </StyledCountryItem>
  );
};

export default CountryItem;
