import styled, { css } from "styled-components";

type Variant = "primary" | "secondary" | "danger";

const Button = styled.button<{ variant?: Variant }>`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => `${theme.space[2]} ${theme.space[4]}`};
  cursor: pointer;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  &:disabled {
    opacity: 0.6;
    cursor:;
  }

  ${({ variant, theme }) =>
    variant === "primary" &&
    css`
      background: ${theme.colors.primary};
      border-color: transparent;
      color: ${theme.colors.textdark};
      font-weight: 700;
    `}

  ${({ variant, theme }) =>
    variant === "secondary" &&
    css`
      background: ${theme.colors.secondary};
      border-color: transparent;
      color: ${theme.colors.textdark};
      font-weight: 700;
    `}

  ${({ variant, theme }) =>
    variant === "danger" &&
    css`
      background: ${theme.colors.danger};
      border-color: transparent;
      color: ${theme.colors.textdark};
      font-weight: 700;
    `}
`;

export default Button;
