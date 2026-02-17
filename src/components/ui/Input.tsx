import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space[3]};
  border-radius: ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Input;
