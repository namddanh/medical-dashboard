import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding ${({ theme }) => theme.space[6]};
  box-shadow: ${({ theme }) => theme.shadow.card}
`;

export default Card;
