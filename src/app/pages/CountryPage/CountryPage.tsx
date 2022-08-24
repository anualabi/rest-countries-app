import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Spinner, Error, Button } from '../../shared/components';
import { useCountryItem, useCountryCode } from '../../shared/hooks/useCountry';
import Detail from '../../components/CountryDetail/CountryDetail';
import styles from './CountryPage.module.css';
import { INativeName } from '../../shared/types/country';

const CountryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, data } = useCountryItem(id);
  const countryCodeQuery = useCountryCode(data?.[0].borders?.toString());

  if (isLoading) return <Spinner />;

  if (isError) return <Error message={'Unable to display country details'} />;

  if (!data) return <p>No details found.</p>;

  const { flags, name, population, region, subregion, capital, tld, currencies, languages } =
    data[0];

  const getNativeName = (obj: INativeName): string => {
    const lastKey = Object.keys({ ...obj }).pop() as string;
    return obj[lastKey].common;
  };

  const borders = countryCodeQuery.isLoading ? (
    <Spinner size="20" borderWidth="2" />
  ) : countryCodeQuery.isError ? (
    <Error message="Unable to display border countries." />
  ) : !countryCodeQuery.data ? (
    <p>n/a</p>
  ) : (
    <ul className={styles.borderList}>
      {countryCodeQuery.data.map((d) => (
        <li key={d.ccn3} className={styles.borderListItem}>
          <Link to={`/${d.ccn3}`}>{d.name.common}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <Container>
      <Button className={styles.backButton} startIcon="arrow_back" onClick={() => navigate(-1)}>
        Back
      </Button>
      <div className={styles.countryDetail}>
        <div className={styles.flagWrapper}>
          <img className={styles.flag} src={flags.svg} alt={`${name.common} flag`} />
        </div>
        <div className={styles.detailWrapper}>
          <h2 className={styles.countryName}>{name.common}</h2>
          <div className={styles.details}>
            <div className={styles.detailList}>
              <Detail
                name="Native Name:"
                info={name.nativeName ? getNativeName(name.nativeName) : 'n/a'}
              />
              <Detail name="Population:" info={population ? population.toLocaleString() : 'n/a'} />
              <Detail name="Region:" info={region} />
              <Detail name="Sub Region:" info={subregion ? subregion : 'n/a'} />
              <Detail name="Capital:" info={capital ? capital[0] : 'n/a'} />
            </div>
            <div className={styles.moreDetailList}>
              <Detail name="Top Level Domain:" info={tld ? tld[0] : 'n/a'} />
              <Detail
                name="Currencies:"
                info={currencies ? Object.keys(currencies).toString() : 'n/a'}
              />
              <Detail
                name="Languages:"
                info={languages ? Object.values(languages).toString() : 'n/a'}
              />
            </div>
          </div>
          <div className={styles.border}>
            <h3>Border Countries:</h3>
            {borders}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CountryPage;
