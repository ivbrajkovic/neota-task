import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import TableViewIcon from '@mui/icons-material/TableView';
import BarChartIcon from '@mui/icons-material/BarChart';
import InfoIcon from '@mui/icons-material/Info';

import SideBarButton from 'components/SideBarButton';

import { styled } from '@mui/material/styles';

const openedMixin = (theme, drawerWidth) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})(({ theme, open, drawerWidth }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  [theme.breakpoints.down('sm')]: {
    position: 'absolute',
  },
  ...(open && {
    ...openedMixin(theme, drawerWidth),
    '& .MuiDrawer-paper': openedMixin(theme, drawerWidth),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const SideBar = ({ open, toggleOpen, drawerWidth }) => (
  <Drawer variant="permanent" open={open} drawerWidth={drawerWidth}>
    <DrawerHeader>
      <IconButton onClick={toggleOpen}>
        <ChevronLeftIcon />
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List>
      <SideBarButton path="/table" name="Table" Icon={TableViewIcon} />
      <SideBarButton path="/chart" name="Chart" Icon={BarChartIcon} />
      <Divider />
      <SideBarButton path="/about" name="About" Icon={InfoIcon} />
    </List>
  </Drawer>
);
export default SideBar;
