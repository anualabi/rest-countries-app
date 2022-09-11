import { StyledCard, CardProps } from './CardStyles';

const Card = ({ children, ...props }: CardProps) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;
