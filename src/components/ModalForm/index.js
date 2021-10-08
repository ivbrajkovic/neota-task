import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';

import { useEffect, useRef } from 'react';
import { setDataPoint, useModalFormOpen } from './useModalForm';

const BlurryDialog = styled(Dialog, {
  shouldForwardProp: (prop) => prop,
})(() => ({
  backdropFilter: 'blur(2px)',
}));

export default function FormDialog() {
  const gmcRef = useRef();
  const pointRef = useRef();
  const [open, setOpenModal] = useModalFormOpen();

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleSubmit = () => {
    setOpenModal(false);

    // Update is fast, so give modal time to close
    setTimeout(setDataPoint, 200, {
      gcm: gmcRef.current.value,
      point: pointRef.current.value,
    });
  };

  useEffect(() => {
    if (!open) return undefined;

    const keyPressHandler = (e) => {
      if (!/[0-9]/.test(e.key)) e.preventDefault();
    };

    setTimeout(() => {
      pointRef.current?.addEventListener('keypress', keyPressHandler);
    }, 0);

    return () => {
      pointRef.current?.removeEventListener('keypress', keyPressHandler);
    };
  }, [open]);

  return (
    <BlurryDialog open={open} onClose={handleCancel}>
      <DialogTitle>Data point</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter general circulation models name and value to update data on
          chart.
        </DialogContentText>
        <TextField
          inputRef={gmcRef}
          autoFocus
          fullWidth
          label="Label"
          margin="dense"
          variant="standard"
        />
        <TextField
          inputRef={pointRef}
          fullWidth
          label="Number"
          margin="dense"
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </BlurryDialog>
  );
}
