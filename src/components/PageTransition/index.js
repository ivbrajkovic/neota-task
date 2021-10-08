import { CSSTransition } from 'react-transition-group';
import styled from '@emotion/styled';

import './styles.css';

const Page = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 50px;
`;

const PageTransition = ({ match, children }) => (
  <CSSTransition
    unmountOnExit
    in={!!match}
    classNames="page"
    timeout={{
      appear: 0,
      enter: 1000,
      exit: 300,
    }}
  >
    <Page>{children}</Page>
  </CSSTransition>
);

export default PageTransition;
