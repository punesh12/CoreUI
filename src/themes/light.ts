import { DefaultTheme } from 'styled-components';
import { colors } from './colors';
import fonts from './fonts';

const lightTheme: DefaultTheme = {
    colors: {
        primary: colors.primary,
        primaryHover: colors.primaryHover,
        primaryActive: colors.primaryActive,
        primaryLight: colors.primaryLight,
        primaryShadow: colors.primaryShadow,
        primaryOutline: colors.primary,
        text: colors.dark0,
        textInverted: colors.light4,
        background: colors.light4,
        red: colors.red1,
        green: colors.green1,
        blue: colors.blue1,
        orange: colors.orange1,
        yellow: colors.yellow1,
        teal: colors.teal1,
        purple: colors.purple1,
    },
    fonts: fonts,
};


export default lightTheme;
