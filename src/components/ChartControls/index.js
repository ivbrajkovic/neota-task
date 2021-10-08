import { memo } from 'react';
import Button from '@mui/material/Button';
import { useClimateDataSelected } from 'hooks/useClimateData';
import { setOpenModal } from 'components/ModalForm/useModalForm';
import DATA from 'data';
import { Card, CardActions, CardContent, CardHeader } from '@mui/material';
import SelectControl from './SelectControl';

const ChartControls = memo(() => {
  const [selected, setSelected] = useClimateDataSelected('selected');

  const handleOpenForm = () => {
    setOpenModal(true);
  };

  const handleChange = ({ target: { name, value } }) => {
    setSelected({ [name]: value });
  };

  return (
    <Card elevation={12} sx={{ py: 1, px: 2, width: 250, marginX: 'auto' }}>
      <CardHeader subheader="Chart control" />
      <CardContent sx={{ pt: 0 }}>
        <SelectControl
          name="country"
          value={selected.country}
          data={DATA.countries}
          onChange={handleChange}
        />
        <SelectControl
          name="period"
          value={selected.period}
          data={DATA.periods}
          onChange={handleChange}
        />
        <SelectControl
          name="variable"
          value={selected.variable}
          data={Object.keys(DATA.variables)}
          onChange={handleChange}
        />
        <SelectControl
          disabled
          name="type"
          value={selected.type}
          data={Object.keys(DATA.type)}
          onChange={handleChange}
        />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpenForm}>
          Open form
        </Button>
      </CardActions>
    </Card>
  );
});

export default ChartControls;
