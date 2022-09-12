import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

export const StyledInputGroup = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 1.6rem;
  height: 30px;
  width: 100%;

  .start-icon {
    margin-right: 0.25rem;
  }

  .end-icon {
    margin-left: 0.25rem;
  }

  &:hover,
  &:focus-within {
  }

  input {
    border: none;
    box-sizing: border-box;
    font-size: inherit;
    font-style: normal;
    line-height: 1.5;
    margin-right: auto;
    width: 100%;

    &::placeholder {
      color: #ccc;
    }

    &:focus {
      outline: none;
    }
  }
`;
