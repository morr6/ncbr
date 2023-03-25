import { rem } from 'polished';

import { colors, gutters } from './constants';

export const theme = {
  colors: {
    grays: colors.grays,
    azure: colors.azure,
    azureDark: colors.azureDark,
    azureLight: colors.azureLight,
    text: {
      default: colors.grays[5],
      disabled: colors.grays[4],
      error: colors.lightRed,
    },
    border: {
      gray: colors.grays[1],
      lighter: colors.grays[5],
      default: colors.grays[2],
      dark: colors.grays[3],
      focus: colors.grays[4],
    },
  },
  fontSizes: {
    big: rem(40),
    medium: rem(22),
    default: rem(16),
    small: rem(14),
    smallXs: rem(12),
  },
  fontWeights: {
    normal: '400',
    medium: '500',
    bold: '600',
  },
  gutters,
};
