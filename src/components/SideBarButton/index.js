import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link, Switch, Route } from 'react-router-dom';

const ListItemButton = ({ path, selected, name, Icon }) => (
  <ListItem button component={Link} to={path} selected={selected}>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={name} />
  </ListItem>
);

const SideBarButton = (props) => (
  <Switch>
    <Route exact path={props.path}>
      {ListItemButton({ ...props, selected: true })}
    </Route>
    <Route path="/">{ListItemButton(props)}</Route>
  </Switch>
);

export default SideBarButton;
