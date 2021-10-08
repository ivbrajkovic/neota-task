import * as React from 'react';
import { Snackbar as MuiSnackbar, Alert as MuiAlert } from '@mui/material';
import { useSnackbar, useSetSnackbar } from './useSnackbar';

const Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const Snackbar = () => {
  const state = useSnackbar();
  const setSnackbar = useSetSnackbar();

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar('');
  };

  return (
    <MuiSnackbar open={!!state} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {state}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
