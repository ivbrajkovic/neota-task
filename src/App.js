import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Navigation } from 'layout';
import Routes from './Routes';

const RootContainer = styled('div')`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const PageContainer = styled('main')(({ theme }) => ({
  flexGrow: 1,
  height: '100%',
  marginLeft: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    marginLeft: `auto`,
  },
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
}));

const ViewContainer = styled('div')`
  position: relative;
`;

const App = () => (
  <RootContainer>
    <Router>
      <Navigation />
      <PageContainer>
        <Toolbar />
        <ViewContainer>
          <Switch>
            <Routes />
          </Switch>
        </ViewContainer>
      </PageContainer>
    </Router>
  </RootContainer>
);

export default App;
