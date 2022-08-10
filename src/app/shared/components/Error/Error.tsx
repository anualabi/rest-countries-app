import styled, { css } from 'styled-components';

type IError = { message: string };

const Error = ({ message }: IError) => {
  return <StyledError className="error">{message}</StyledError>;
};

const StyledError = styled.p`
  ${css`
    color: red;
    font-size: 1.2rem;
    text-align: center;
  `}
`;

export default Error;
