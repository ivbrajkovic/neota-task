import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { styled } from '@mui/material/styles';
import { Tooltip } from '@mui/material';
import { useThemeMode } from 'theme';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopBar = ({ open, drawerWidth, toggleOpen }) => {
  const [themeMode, toggleThemeMode] = useThemeMode();
  const isDarkMode = themeMode === 'dark';
  return (
    <AppBar position="fixed" open={open} drawerWidth={drawerWidth}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{
            marginRight: '36px',
            ...(open && { display: 'none' }),
          }}
          onClick={toggleOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" flexGrow={1}>
          Temperature and precipitation visualizer
        </Typography>
        <Tooltip
          title={(isDarkMode && 'Light theme') || 'Dark theme'}
          placement="bottom"
        >
          <IconButton color="inherit" onClick={toggleThemeMode}>
            {(isDarkMode && <Brightness4Icon />) || <Brightness7Icon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;
