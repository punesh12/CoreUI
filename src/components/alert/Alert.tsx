import { FC, ReactNode, useCallback, useMemo, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { RenderLabelIcon } from '../../src/utils/RenderLabelIcon';
import {
  AlertContent,
  AlertMessage,
  AlertTitle,
  AlertWrapper,
  CloseButton,
  HeaderWrapper,
} from './style';

interface AlertProps {
  variant: 'info' | 'success' | 'error' | 'warning';
  title: string;
  content?: ReactNode;
  hideCloseButton?: boolean;
  onClose?: () => void;
  width?: string;
}

/**
 * Functional component for displaying an alert with customizable variant, title, content, and close button.
 *
 * @param variant - The type of alert: 'info', 'success', 'error', or 'warning'.
 * @param title - Optional title for the alert.
 * @param content - The main content of the alert.
 * @param hideCloseButton - Boolean to hide the close button (default is false).
 * @param onClose - Callback function to be executed when the alert is closed.
 * @param width - Optional width for the alert.
 *
 * @returns A styled alert component with the specified properties.
 */
const Alert: FC<AlertProps> = (props: AlertProps) => {
  const {
    variant,
    title,
    content,
    hideCloseButton = false,
    onClose,
    width,
  } = props;

  const isDarkMode = useSelector(
    (state: RootState) => state.theme.isDarkMode,
    shallowEqual
  );

  const [visible, setVisible] = useState<boolean>(true);

  const handleOnClose = useCallback(() => {
    setVisible(false);
    if (onClose) onClose();
  }, [onClose]);

  const icon = useMemo(
    () => <RenderLabelIcon variant={variant} isDarkMode={isDarkMode} />,
    [variant, isDarkMode]
  );

  if (!visible) return null;

  return (
    <AlertWrapper variant={variant} darkTheme={isDarkMode} width={width}>
      <AlertContent>
        <HeaderWrapper>
          {title && (
            <AlertTitle>
              {icon}
              {title}
            </AlertTitle>
          )}

          {!hideCloseButton && (
            <CloseButton onClick={handleOnClose}>
              <FaTimes />
            </CloseButton>
          )}
        </HeaderWrapper>
        {content && <AlertMessage>{content}</AlertMessage>}
      </AlertContent>
    </AlertWrapper>
  );
};

export default Alert;
