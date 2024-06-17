import React from 'react';
import { FaCircleCheck, FaCircleInfo } from 'react-icons/fa6';
import { IoIosWarning } from 'react-icons/io';
import { IoCloseCircle } from 'react-icons/io5';
import { colors } from '../../themes/colors';

interface RenderIconProps {
  variant: 'info' | 'success' | 'error' | 'warning';
  isDarkMode: boolean;
}

export const RenderLabelIcon = ({
  variant,
  isDarkMode,
}: RenderIconProps): React.ReactNode => {
  switch (variant) {
    case 'info':
      return (
        <FaCircleInfo
          color={isDarkMode ? colors.blue3 : colors.blue0}
          size={20}
        />
      );
    case 'success':
      return <FaCircleCheck color={colors.green0} size={20} />;
    case 'error':
      return <IoCloseCircle color={colors.red0} size={20} />;
    case 'warning':
      return <IoIosWarning color={colors.orange0} size={20} />;
    default:
      return null;
  }
};
