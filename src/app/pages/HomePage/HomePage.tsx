import { useState } from 'react';
import { Container } from '../../shared/components';
import CountrySearch from '../../components/CountrySearch/CountrySearch';
import RegionFilter from '../../components/FilterByRegion/RegionFilter';
import CountryList from '../../components/CountryList/CountryList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [filter, setFilter] = useState({ searchTerm: '', selectedOption: '' });
  const { searchTerm, selectedOption } = filter;

  return (
    <>
      <Container className={styles.filter}>
        <CountrySearch
          searchQuery={searchTerm}
          handleSearchQuery={(e) => setFilter({ searchTerm: e, selectedOption: '' })}
        />
        <RegionFilter
          selectedOption={selectedOption}
          handleSelectOption={(e) => setFilter({ searchTerm: '', selectedOption: e })}
        />
      </Container>
      <CountryList searchTerm={searchTerm} selectedOption={selectedOption} />
    </>
  );
};

export default HomePage;
