import { useState } from 'react';
import { Container } from '../shared/components';
import CountrySearchForm from '../components/CountrySearch/CountrySearchForm';
import CountryAll from '../components/CountryAll/CountryAll';
import CountrySearchResult from '../components/CountrySearch/CountrySearchResult';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  let displayCountryList: React.ReactNode;

  if (searchTerm.length > 1) {
    displayCountryList = <CountrySearchResult searchTerm={searchTerm} />;
  } else {
    displayCountryList = <CountryAll />;
  }

  return (
    <Container>
      <div>
        <CountrySearchForm searchQuery={searchTerm} handleSearchQuery={(e) => setSearchTerm(e)} />
        {displayCountryList}
      </div>
    </Container>
  );
};

export default HomePage;
