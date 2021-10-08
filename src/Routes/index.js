import Copyright from 'components/Copyright';
import PageTransition from 'components/PageTransition';
import { TableView, ChartView, About } from 'view';
import { Route, Redirect } from 'react-router-dom';

export const routes = [
  { path: '/table', name: 'Table', Component: TableView },
  { path: '/chart', name: 'Chart', Component: ChartView },
  { path: '/about', name: 'About', Component: About },
];

const Routes = () => (
  <>
    <Route exact path="/">
      <Redirect to="/chart" />
    </Route>
    {routes.map(({ path, Component }) => (
      <Route exact key={path} path={path}>
        {({ match }) => (
          <PageTransition match={match}>
            <Component />
            <Copyright />
          </PageTransition>
        )}
      </Route>
    ))}
  </>
);

export default Routes;
