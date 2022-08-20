import { Card, Field } from '../../shared/components';
import styles from './CountrySearch.module.css';

interface ISearch {
  searchQuery: string;
  handleSearchQuery: (e: string) => void;
}

const CountrySearchForm = ({ searchQuery, handleSearchQuery }: ISearch) => {
  return (
    <div className={styles.form}>
      <Card className={styles.card}>
        <Field>
          <Field.Input
            className={styles.input}
            type="text"
            name="search"
            aria-label="search"
            placeholder="Search for a country..."
            startIcon="search"
            value={searchQuery}
            onChange={(e) => handleSearchQuery(e.target.value)}
          />
        </Field>
      </Card>
    </div>
  );
};

export default CountrySearchForm;
