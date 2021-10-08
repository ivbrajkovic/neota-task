import { Container as MuiContainer } from '@mui/material';
import { styled } from '@mui/material/styles';
import AboutCard from 'components/AboutCard';

const Container = styled(MuiContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Container>
    <AboutCard />
  </Container>
);
