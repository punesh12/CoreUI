import styled from 'styled-components';
import { colors } from '../../themes/colors';

const getBackgroundColor = (props: any) => {
  if (props.darkTheme) return colors.dark2;
  else {
    switch (props.variant) {
      case 'info':
        return colors.blue4;
      case 'success':
        return colors.green4;
      case 'error':
        return colors.red4;
      case 'warning':
        return colors.orange4;
      default:
        return colors.blue4;
    }
  }
};

export const AlertWrapper = styled.div<{
  variant: string;
  darkTheme?: boolean;
  width?: string;
}>`
  width: ${(props) => props.width ?? '100%'};
  min-height: 60px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;

  background-color: ${(props) => getBackgroundColor(props)};
  color: ${(props) => (props.darkTheme ? '#fff' : '#000')};
  ${(props) => {
    const borderColor = (() => {
      switch (props.variant) {
        case 'info':
          return props.theme.colors.blue;
        case 'success':
          return props.theme.colors.green;
        case 'error':
          return props.theme.colors.red;
        case 'warning':
          return props.theme.colors.orange;
        default:
          return '#000';
      }
    })();

    if (props.darkTheme) {
      return `border-top: 5px solid ${borderColor};`;
    } else {
      return `border-left: 5px solid ${borderColor};`;
    }
  }}
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border: none;
  outline: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: inherit;
  padding: 6px;

  svg {
    margin: 0 !important;
  }
`;

export const AlertTitle = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const AlertMessage = styled.p`
  margin: 0.5rem 0 0 36px;
  text-align: left;
  font-weight: 500;
`;

export const HeaderWrapper = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;

  svg {
    margin-right: 1rem;
  }
`;

export const AlertContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
