import { useState } from 'react';
import SideBar from '../../components/SideBar';
import TopBar from '../../components/TopBar';

const drawerWidth = 240;

function Navigation() {
  // const { matches } = window.matchMedia('(min-width: 768px)');
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <>
      <TopBar open={open} toggleOpen={toggleOpen} drawerWidth={drawerWidth} />
      <SideBar open={open} toggleOpen={toggleOpen} drawerWidth={drawerWidth} />
    </>
  );
}

export default Navigation;
