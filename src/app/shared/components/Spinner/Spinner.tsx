import styled, { css } from 'styled-components';

const Spinner = () => {
  return <StyledSpinner className="spinner"></StyledSpinner>;
};

const StyledSpinner = styled.div`
  ${css`
    border: 10px solid ${(props) => props.theme.bg};
    border-top: 10px solid ${(props) => props.theme.text};
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin: 20% auto;
    animation: spin 1s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;

export default Spinner;
