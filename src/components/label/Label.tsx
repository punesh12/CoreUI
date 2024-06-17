import React from 'react';
import styled from 'styled-components';

/**
 * Props for the Label component.
 */
interface LabelProps {
  /**
   * The content to be displayed inside the label.
   */
  children: React.ReactNode;

  /**
   * The size of the label. Can be 'small', 'medium', or 'large'.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Optional icon to be displayed on the left side of the label.
   */
  iconLeft?: React.ReactNode;

  /**
   * Optional icon to be displayed on the right side of the label.
   */
  iconRight?: React.ReactNode;
}

/**
 * Styled component for the Label container.
 */
const LabelContainer = styled.label<Pick<LabelProps, 'size'>>`
  display: inline-flex;
  align-items: center;
  font-family: 'Arial, sans-serif';
  font-weight: ${(props) => (props.size === 'large' ? 'bold' : 'normal')};
  font-size: ${(props) =>
    props.size === 'large'
      ? '24px'
      : props.size === 'medium'
      ? '16px'
      : '12px'};

  svg {
    margin: 0 4px;
  }
`;

/**
 * Label component to display text with optional left and right icons.
 *
 * @param {LabelProps} props - Props for the Label component.
 * @returns {JSX.Element} The rendered Label component.
 */
const Label: React.FC<LabelProps> = ({
  children,
  size = 'medium',
  iconLeft,
  iconRight,
}) => (
  <LabelContainer size={size}>
    {iconLeft && <span>{iconLeft}</span>}
    {children}
    {iconRight && <span>{iconRight}</span>}
  </LabelContainer>
);

export default Label;
