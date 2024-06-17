import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styled from 'styled-components';

// Define the type for the Button props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
}

// Define the styled button component
const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textInverted};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-family: ${(props) => props.theme.fonts.body};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.primaryActive};
  }
`;

// Define the Button component with extended props
const Button: FC<ButtonProps> = ({
  children,
  onClick,
  ...props
}: ButtonProps) => (
  //  @ts-ignore
  <StyledButton onClick={onClick} {...props}>
    {/* @ts-ignore */}
    {children}
  </StyledButton>
);

export default Button;
