import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    gray: {
      950: '#09090A',
      900: '#141419',
      800: '#202024',
      600: '#323238',
      300: '#8D8D99',
      200: '#C4C4CC',
    },
    white: '#FFFFFF',
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
    medium: 'Roboto_500Medium',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
});
