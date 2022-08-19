import styled from 'styled-components';
import { Card, Field } from '../../shared/components';

interface ISearch {
  searchQuery: string;
  handleSearchQuery: (e: string) => void;
}

const CountrySearchForm = ({ searchQuery, handleSearchQuery }: ISearch) => {
  return (
    <StyledSearchForm>
      <Card>
        <Field>
          <Field.Input
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
    </StyledSearchForm>
  );
};

export const StyledSearchForm = styled.form`
  display: flex;
  max-width: 500px;

  .card {
    width: 100%;
  }

  .start-icon {
    font-size: 1.2rem;
    font-weight: 600;
    margin-right: 1rem;
  }

  input {
    font-size: 1rem;
  }
`;

export default CountrySearchForm;
