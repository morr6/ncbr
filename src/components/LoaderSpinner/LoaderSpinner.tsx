import CircularProgress from '@mui/material/CircularProgress';

import { colors } from 'styles/constants';
import { Wrapper, Text } from './LoaderSpinner.styled';

export const LoaderSpinner = () => {
  return (
    <Wrapper>
      <CircularProgress
        size={75}
        sx={{
          color: colors.azure,
        }}
      />

      <Text>Please wait...</Text>
    </Wrapper>
  );
};

export default LoaderSpinner;
