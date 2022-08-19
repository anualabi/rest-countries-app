import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

export const StyledInputGroup = styled.div`
  background-color: ${(props) => props.theme.element};
  border: 2px solid ${(props) => props.theme.element};
  box-sizing: border-box;
  color: ${(props) => props.theme.text};
  display: flex;
  justiify-content: space-between;
  align-items: center;
  padding: 1.6rem;
  height: 30px;
  width: 100%;
  transition: 0.2s;

  .start-icon {
    margin-right: 0.25rem;
  }

  .end-icon {
    margin-left: 0.25rem;
  }

  &:hover,
  &:focus-within {
    border-color: ${(props) => props.theme.element};
  }

  input {
    background-color: ${(props) => props.theme.element};
    border: none;
    box-sizing: border-box;
    color: ${(props) => props.theme.text};
    font-size: 1.1rem;
    font-style: normal;
    line-height: 1.5;
    margin-right: auto;
    width: 100%;

    &::placeholder {
      color: ${(props) => props.theme.text};
    }

    &:focus {
      outline: none;
    }
  }
`;
