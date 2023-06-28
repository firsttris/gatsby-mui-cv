import { Box, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import { navigate } from 'gatsby';

const CenteredBox = styled(Box)({
  display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'
});

export default (): JSX.Element => {
  if (typeof window !== 'undefined') {
    let locale = 'en';
    if (navigator.language.includes('de')) {
      locale = 'de';
    }
    navigate(`/${locale}/`);
  }

  return (
    <CenteredBox>
      <CircularProgress />
    </CenteredBox>
  );
};