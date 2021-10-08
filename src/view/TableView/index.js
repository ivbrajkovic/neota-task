import { Container as MuiContainer } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled(MuiContainer)(() => ({
  display: 'flex',
  fontSize: 56,
  alignItems: 'center',
  justifyContent: 'center',
}));

export default () => <Container>Page 1</Container>;
