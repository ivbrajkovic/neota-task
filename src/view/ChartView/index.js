import { useEffect } from 'react';
import { Container as MuiContainer, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BarChart, ChartControls, ModalForm } from 'components';
import { useSetSnackbar } from 'components/Snackbar/useSnackbar';
import { useClimateDataSelected } from 'hooks/useClimateData';
import { doFetchParallel } from 'hooks/useFetchClimateData';
import { formatUrls } from 'common';

const Container = styled(MuiContainer)(() => ({
  display: 'flex',
}));

const DATA_TYPE = 'annualavg';

export default () => {
  const [selected] = useClimateDataSelected();
  const setSnackBar = useSetSnackbar();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urls = formatUrls({ ...selected, type: DATA_TYPE });
        await doFetchParallel(urls);
      } catch (error) {
        setSnackBar(error.message);
      }
    };
    fetchData();
  }, [selected]);

  return (
    <Container>
      <ModalForm open />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        pt={3}
      >
        <Grid item xs={12} md={4}>
          <ChartControls />
        </Grid>
        <Grid item xs={10} md={8}>
          <BarChart type={DATA_TYPE} />
        </Grid>
      </Grid>
    </Container>
  );
};
