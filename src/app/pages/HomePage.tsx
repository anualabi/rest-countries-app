import { useState } from 'react';
import { Container } from '../shared/components';
import CountrySearchForm from '../components/CountrySearch/CountrySearchForm';
import RegionFilterForm from '../components/FilterByRegion/RegionFilterForm';
import CountryAll from '../components/CountryAll/CountryAll';
import CountrySearchResult from '../components/CountrySearch/CountrySearchResult';
import RegionCountryList from '../components/FilterByRegion/RegionCountryList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [filter, setFilter] = useState({ searchTerm: '', selectedOption: '' });
  const { searchTerm, selectedOption } = filter;
  let displayCountryList: React.ReactNode;

  if (searchTerm.length > 1) {
    displayCountryList = <CountrySearchResult searchTerm={searchTerm} />;
  } else if (selectedOption) {
    displayCountryList = <RegionCountryList region={selectedOption} />;
  } else {
    displayCountryList = <CountryAll />;
  }

  return (
    <Container>
      <div>
        <div className={styles.filter}>
          <CountrySearchForm
            searchQuery={searchTerm}
            handleSearchQuery={(e) => setFilter({ searchTerm: e, selectedOption: '' })}
          />
          <RegionFilterForm
            selectedOption={selectedOption}
            handleSelectOption={(e) => setFilter({ searchTerm: '', selectedOption: e })}
          />
        </div>
        {displayCountryList}
      </div>
    </Container>
  );
};

export default HomePage;
